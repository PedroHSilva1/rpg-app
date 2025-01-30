import { getAll, getById, getByIdRace } from "../repositories/subrace.repository.js";

export const get = async (req, res) => {
    try {
        const subraces = await getAll()
        res.status(302).send(subraces)
    } catch (e) {
        res.status(404).send({error: "Sub-Races not found"})
    }
}

export const getId = async (req, res) => {
    try {
        const subrace = await getById(Number(req.params.id))
        res.status(302).send(subrace)
    } catch (e) {
        res.status(404).send({error: "Sub-Race not found"})
    }
}

export const getIdrace = async (req, res) => {
    try {
        const subrace = await getByIdRace(Number(req.params.race_id))
        res.status(302).send(subrace)
    } catch (e) {
        res.status(404).send({ error: "Sub-race not found for this race"})
    }
}