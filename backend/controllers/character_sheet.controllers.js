import { getAll, getById, create, remove } from "../repositories/character_sheet.repository.js";

export const get = async (req, res) => {
    try {
        const characters = await getAll();
        res.status(200).send(characters);
    } catch (e) {
        console.error("Erro ao buscar personagens:", e);
        res.status(500).send({ error: "Erro ao buscar personagens." });
    }
};

export const getId = async (req, res) => {
    try {
        const character = await getById(Number(req.params.id));
        if (!character) {
            return res.status(404).send({ error: "Personagem não encontrado." });
        }
        res.status(200).send(character);
    } catch (e) {
        console.error("Erro ao buscar personagem:", e);
        res.status(500).send({ error: "Erro ao buscar personagem." });
    }
};

export const createCharacter = async (req, res) => {
    try {
        const newCharacter = await create(req.body);
        res.status(201).send(newCharacter);
    } catch (e) {
        console.error("Erro ao criar personagem:", e);
        res.status(500).send({ error: "Erro ao criar personagem." });
    }
};

export const deleteCharacter = async (req, res) => {
    try {
        await remove(Number(req.params.id));
        res.status(204).send();
    } catch (e) {
        console.error("Erro ao deletar personagem:", e);
        res.status(500).send({ error: "Erro ao deletar personagem." });
    }
};