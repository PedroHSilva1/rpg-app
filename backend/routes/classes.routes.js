import { get, getId } from "../controllers/classes.controllers.js";

const classesRoutes = (app) => {
    app.get("/classes", get); 
    app.get("/classes/:id", getId); 
};

export default classesRoutes;