import { get, getId } from "../controllers/race.controllers.js";

const raceRoutes = app => {
    app.get("/races", get);  
    app.get("/races/:id", getId);  
};

export default raceRoutes;