import { getAll, getById } from "../repositories/deities.repository.js";

export const get = async (req, res) => {
    try {
        const deities = await getAll();
        res.status(200).send(deities);
    } catch (e) {
        console.error("Erro ao buscar divindades:", e);
        res.status(500).send({ error: "Erro ao buscar divindades." });
    }
};

export const getId = async (req, res) => {
    try {
        const deity = await getById(Number(req.params.id));
        if (!deity) {
            return res.status(404).send({ error: "Divindade não encontrada." });
        }
        res.status(200).send(deity);
    } catch (e) {
        console.error("Erro ao buscar divindade:", e);
        res.status(500).send({ error: "Erro ao buscar divindade." });
    }
};

