import { getAll, getById } from "../repositories/skill.repository.js";

export const get = async (req, res) => {
    try {
        const skills = await getAll()
        res.status(200).send(skills)
    } catch (e) {
        res.status(404).send({error: "Skills not found"})
    }
}

export const getId = async (req, res) => {
    try {
        const skill = await getById(Number(req.params.id))
        res.status(200).send(skill)
    } catch (e) {
        res.status(404).send({error: "Skill not found"})
    }
}