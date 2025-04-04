import { getAll, getById } from "../repositories/classes.repository.js";

export const get = async (req, res) => {
    try {
        const classes = await getAll();
        res.status(200).send(classes);
    } catch (e) {
        console.error("Erro ao buscar classes:", e);
        res.status(500).send({ error: "Erro ao buscar classes." });
    }
};

export const getId = async (req, res) => {
    try {
        const classData = await getById(Number(req.params.id));
        if (!classData) {
            return res.status(404).send({ error: "Classe não encontrada." });
        }
        res.status(200).send(classData);
    } catch (e) {
        console.error("Erro ao buscar classe:", e);
        res.status(500).send({ error: "Erro ao buscar classe." });
    }
};