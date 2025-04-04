import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const classes = await prisma.classes.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            traits: true,
        },
    });
    return classes;
};

export const getById = async (id) => {
    const classData = await prisma.classes.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            description: true,
            traits: true,
        },
    });
    return classData;
};