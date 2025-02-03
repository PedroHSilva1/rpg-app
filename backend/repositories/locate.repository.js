import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const locates = await prisma.locates.findMany({
        select:{
            id: true,
            location: true,
            name: true,
            subtitle: true,
            description: true,
        }
    })
    return locates
}

export const getById = async (id) => {
    const locate = await prisma.locates.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            location: true,
            name: true,
            subtitle: true,
            description: true,
        }
    })
    return locate
}