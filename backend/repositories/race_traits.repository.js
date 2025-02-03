import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const race_traits = await prisma.races_traits.findMany({
        select:{
            id: true,
            name: true,
            description: true,
        }
    })
    return race_traits
}

export const getById = async (id) => {
    const race_trait = await prisma.races_traits.findUnique({
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
    return race_trait
}

export const getByIdRace = async (race_id) => {
    const race_trait = await prisma.races_traits.findMany({
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
    return race_trait
}