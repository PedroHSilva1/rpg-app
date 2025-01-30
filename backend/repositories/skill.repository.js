import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const skills = await prisma.skills.findMany({
        select:{
            id: true,
            name: true,
            attribute_id: true,
        }
    })
    return skills
}

export const getById = async (id) => {
    const skill = await prisma.skills.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            name: true,
            description: true,
        }
    })
    return skill
}