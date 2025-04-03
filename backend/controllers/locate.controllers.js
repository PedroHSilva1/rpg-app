import { getAll, getById } from "../repositories/locate.repository.js";

export const get = async (req, res) => {
    try {
        const locates = await getAll()
        res.status(302).send(locates)
    } catch (e) {
        res.status(404).send({error: "locates not found"})
    }
}

export const getId = async (req, res) => {
    try {
        const locate = await getById(Number(req.params.id))
        res.status(302).send(locate)
    } catch (e) {
        res.status(404).send({error: "locate not found"})
    }
}