import { get, getId, getEmail, createUser, updateUser, deleteUser } from "../controllers/user.controllers.js";

const userRoutes = (app) => {
    app.get("/users", get); 
    app.get("/users/:id", getId); 
    app.get("/users/email/:email", getEmail); 
    app.post("/users", createUser); 
    app.put("/users/:id", updateUser); 
    app.delete("/users/:id", deleteUser); 
};

export default userRoutes;