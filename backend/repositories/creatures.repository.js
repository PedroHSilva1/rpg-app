import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const creatures = await prisma.creatures.findMany({
        select: {
            id: true,
            name: true,
            type: true,
            location: true,
            description: true,
        },
    });
    return creatures;
};

export const getById = async (id) => {
    const creature = await prisma.creatures.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            type: true,
            location: true,
            description: true,
        },
    });
    return creature;
};