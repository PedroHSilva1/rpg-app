import { getAll, getById, getByIdRace } from "../repositories/race_traits.repository.js";

export const get = async (req, res) => {
    try {
        const race_traits = await getAll()
        res.status(200).send(race_traits)
    } catch (e) {
        res.status(404).send({error: "Races traits not found"})
    }
}

export const getId = async (req, res) => {
    try {
        const race_trait = await getById(Number(req.params.id))
        res.status(200).send(race_trait)
    } catch (e) {
        res.status(404).send({error: "race trait not found"})
    }
}

export const getIdrace = async (req, res) => {
    try {
        const race_trait = await getByIdRace(Number(req.params.race_id))
        res.status(200).send(race_trait)
    } catch (e) {
        res.status(404).send({ error: "race trait not found for this race"})
    }
}