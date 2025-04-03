import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const characters = await prisma.character_sheet.findMany({
        select: {
            id: true,
            char_name: true,
            user_id: true,
            races: { select: { name: true } }, // Corrigido de 'race' para 'races'
            subrace: { select: { name: true } },
            classes: { select: { name: true } }, // Não há relacionamento direto com 'class', então use 'class_id'
        },
    });
    return characters;
};

export const getById = async (id) => {
    const character = await prisma.character_sheet.findUnique({
        where: { id },
        select: {
            id: true,
            char_name: true,
            user_id: true,
            races: { select: { name: true } }, // Corrigido de 'race' para 'races'
            subrace: { select: { name: true } },
            classes: { select: { name: true } }, // Não há relacionamento direto com 'class', então use 'class_id'
        },
    });
    return character;
};

export const create = async (data) => {
    const newCharacter = await prisma.character_sheet.create({
        data,
    });
    return newCharacter;
};

export const remove = async (id) => {
    const deletedCharacter = await prisma.character_sheet.delete({
        where: { id },
    });
    return deletedCharacter;
};