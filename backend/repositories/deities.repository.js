import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const deities = await prisma.deities.findMany({
        select: {
            id: true,
            name: true,
            image_path: true,
            description: true,
        },
    });
    return deities;
};

export const getById = async (id) => {
    const deity = await prisma.deities.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            image_path: true,
            description: true,
        },
    });
    return deity;
};