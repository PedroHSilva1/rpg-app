import { get, getId, getIdrace } from "../controllers/subrace.controllers.js";

const subraceRoutes = app => {
    app.get("/subraces", get);  
    app.get("/subraces/:id", getId);  
    app.get("/subraces/race/:race_id", getIdrace)
};

export default subraceRoutes;