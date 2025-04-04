import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const characters = await prisma.character_sheet.findMany({
        select: {
            id: true,
            char_name: true,
            user_id: true,
            races: { select: { name: true } }, 
            subrace: { select: { name: true } },
            classes: { select: { name: true } }, 
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
            races: { select: { name: true } }, 
            subrace: { select: { name: true } },
            classes: { select: { name: true } }, 
            attributes: true,
        },
    });
    return character;
};

export const create = async (data) => {
    const newCharacter = await prisma.character_sheet.create({
        data: {
            char_name: data.char_name,
            race_id: data.race_id,
            subrace_id: data.subrace_id,
            class_id: data.class_id,
            user_id: parseInt(data.user_id, 10), 
            attributes: JSON.stringify(data.attributes),
          },
    });
    return newCharacter;
};

export const remove = async (id) => {
    const deletedCharacter = await prisma.character_sheet.delete({
        where: { id },
    });
    return deletedCharacter;
};