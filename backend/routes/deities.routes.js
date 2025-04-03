import { get, getId } from "../controllers/deities.controllers.js";

const deitiesRoutes = (app) => {
    app.get("/deities", get); 
    app.get("/deities/:id", getId); 
};

export default deitiesRoutes;