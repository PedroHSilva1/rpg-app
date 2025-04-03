import { get, getId, getIdrace } from "../controllers/race_traits.controllers.js";

const race_traitsRoutes = app => {
    app.get("/race_trait", get);  
    app.get("/race_trait/:id", getId);  
    app.get("/race_trait/race/:race_id", getIdrace)
};

export default race_traitsRoutes;