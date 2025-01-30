import { get, getId } from "../controllers/race.controllers.js";

const raceRoutes = app => {
    app.get("/races", get);  // Ajustando o nome da rota
    app.get("/races/:id", getId);  // Ajustando para buscar por ID
};

export default raceRoutes;