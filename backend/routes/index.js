import raceRoutes from "./race.routes.js";
import subraceRoutes from "./subrace.routes.js";
import skillRoutes from "./skill.routes.js";
// Importando todas as rotas em uma única variável, para melhor organização

const routes = (app) => {
    raceRoutes(app);
    subraceRoutes(app);
    skillRoutes(app);
};

export default routes;