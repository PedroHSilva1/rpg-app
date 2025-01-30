import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const subraces = await prisma.subrace.findMany({
        select:{
            id: true,
            race_id:true,
            name: true,
            description: true,
        }
    })
    return subraces
}

export const getById = async (id) => {
    const subrace = await prisma.subrace.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            race_id: true,
            name: true,
            description: true,
        }
    })
    return subrace
}

export const getByIdRace = async (race_id) => {
    const subrace = await prisma.subrace.findMany({
        where:{
            race_id
        },
        select:{
            id: true,
            race_id: true,
            name: true,
            description: true,
        }
    })
    return subrace
}