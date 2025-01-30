import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const races = await prisma.races.findMany({
        select:{
            id: true,
            name: true,
            description: true,
        }
    })
    return races
}

export const getById = async (id) => {
    const race = await prisma.races.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            name: true,
            description: true,
        }
    })
    return race
}