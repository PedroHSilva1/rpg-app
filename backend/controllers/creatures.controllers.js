import { getAll, getById } from "../repositories/creatures.repository.js";

export const get = async (req, res) => {
    try {
        const creatures = await getAll();
        res.status(200).send(creatures);
    } catch (e) {
        console.error("Erro ao buscar criaturas:", e);
        res.status(500).send({ error: "Erro ao buscar criaturas." });
    }
};

export const getId = async (req, res) => {
    try {
        const creature = await getById(Number(req.params.id));
        if (!creature) {
            return res.status(404).send({ error: "Criatura não encontrada." });
        }
        res.status(200).send(creature);
    } catch (e) {
        console.error("Erro ao buscar criatura:", e);
        res.status(500).send({ error: "Erro ao buscar criatura." });
    }
};