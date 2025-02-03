import { get, getId } from "../controllers/locate.repository.js";

const locateRoutes = app => {
    app.get("/locates", get);  
    app.get("/locates/:id", getId);  
};

export default locateRoutes;