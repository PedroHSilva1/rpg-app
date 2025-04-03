import { prisma } from "../services/prisma.js";

export const getAll = async () => {
    const users = await prisma.users.findMany({
        select: {
            id: true,
            email: true,
        },
    });
    return users;
};

export const getById = async (id) => {
    const user = await prisma.users.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            email: true,
        },
    });
    return user;
};

export const getByEmail = async (email) => {
    const user = await prisma.users.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            password: true,
        },
    });
    return user;
};

export const create = async (data) => {
    const newUser = await prisma.users.create({
        data,
        select:{
            id:true,
            name: true,
            email: true,
            password: false
        }
    })
    return newUser
};

export const update = async (id, data) => {
    const updatedUser = await prisma.users.update({
        where: {
            id,
        },
        data,
    });
    return updatedUser;
};

export const remove = async (id) => {
    const deletedUser = await prisma.users.delete({
        where: {
            id,
        },
    });
    return deletedUser;
};