import { get, getId, createCharacter, deleteCharacter } from "../controllers/character_sheet.controllers.js";

const characterRoutes = (app) => {
    app.get("/characters", get); // Busca todos os personagens
    app.get("/characters/:id", getId); // Busca um personagem específico
    app.post("/characters", createCharacter); // Cria um novo personagem
    app.delete("/characters/:id", deleteCharacter); // Deleta um personagem
};

export default characterRoutes;