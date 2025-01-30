import { get, getId } from "../controllers/skill.controllers.js";

const skillRoutes = app => {
    app.get("/skill", get);  
    app.get("/skill/:id", getId);
};

export default skillRoutes;