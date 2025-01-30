import { get, getId, getIdrace } from "../controllers/subrace.controllers.js";

const subraceRoutes = app => {
    app.get("/subraces", get);  // Ajustando o nome da rota
    app.get("/subraces/:id", getId);  // Ajustando para buscar por ID
    app.get("/subraces/race/:race_id", getIdrace)
};

export default subraceRoutes;