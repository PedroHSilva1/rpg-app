import raceRoutes from "./race.routes.js";
import subraceRoutes from "./subrace.routes.js";
import skillRoutes from "./skill.routes.js";
import race_traitsRoutes from "./race_traits.routes.js";
import locateRoutes from "./locate.routes.js";
import userRoutes from "./user.routes.js";
import deitiesRoutes from "./deities.routes.js";
// Importando todas as rotas em uma única variável, para melhor organização

const routes = (app) => {
    raceRoutes(app);
    subraceRoutes(app);
    skillRoutes(app);
    race_traitsRoutes(app);
    locateRoutes(app);
    userRoutes(app);
    deitiesRoutes(app);
};

export default routes;