import { getAll, getById, getByEmail, create, update, remove } from "../repositories/user.repository.js";
import { validateUser, sanitizeUser } from "../validations/user.validation.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

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
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashPassword;

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
            if (req.body.password) {
                const hashPassword = await bcrypt.hash(req.body.senha, 10);
                req.body.password = hashPassword;
            }
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

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca o usuário pelo e-mail
        const user = await getByEmail(email);
        if (!user) {
            return res.status(404).send({ error: "Usuário não encontrado." });
        }

        // Verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ error: "Credenciais inválidas." });
        }

        // Gera um token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email }, // Payload com ID e email
            process.env.JWT_SECRET, // Chave secreta
            { expiresIn: "1h" } // Token expira em 1 hora
        );

        res.status(200).send({
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).send({ error: "Erro ao fazer login." });
    }
};