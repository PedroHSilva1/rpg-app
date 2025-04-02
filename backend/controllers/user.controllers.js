import { getAll, getById, getByEmail, create, update, remove } from "../repositories/user.repository.js";
import { validateUser, sanitizeUser } from "../validations/user.validation.js";


export const get = async (req, res) => {
    try {
        const users = await getAll();
        res.status(200).send(users);
    } catch (e) {
        res.status(404).send({ error: "Users not found" });
    }
};

export const getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id));
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({ error: "Error fetching user" });
    }
};

export const getEmail = async (req, res) => {
    try {
        const user = await getByEmail(req.params.email);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({ error: "Error fetching user by email" });
    }
};

export const createUser = [
    sanitizeUser, 
    validateUser, 
    async (req, res) => {
        try {
            const newUser = await create(req.body);
            res.status(201).send(newUser);
        } catch (e) {
            res.status(400).send({ error: "Error creating user" });
        }
    },
];

export const updateUser = [
    sanitizeUser, 
    validateUser,
    async (req, res) => {
        try {
            const updatedUser = await update(Number(req.params.id), req.body);
            res.status(200).send(updatedUser);
        } catch (e) {
            res.status(400).send({ error: "Error updating user" });
        }
    },
];

export const deleteUser = async (req, res) => {
    try {
        await remove(Number(req.params.id));
        res.status(204).send();
    } catch (e) {
        res.status(400).send({ error: "Error deleting user" });
    }
};