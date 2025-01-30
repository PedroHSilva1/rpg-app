import { getAll, getById } from "../repositories/race.repository.js";

export const get = async (req, res) => {
    try {
        const races = await getAll()
        res.status(302).send(races)
    } catch (e) {
        res.status(404).send({error: "Races not found"})
    }
}

export const getId = async (req, res) => {
    try {
        const race = await getById(Number(req.params.id))
        res.status(302).send(race)
    } catch (e) {
        res.status(404).send({error: "race not found"})
    }
}