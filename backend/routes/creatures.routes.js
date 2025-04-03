import { get, getId } from "../controllers/creatures.controllers.js";

const creaturesRoutes = (app) => {
    app.get("/creatures", get); 
    app.get("/creatures/:id", getId);
};

export default creaturesRoutes;