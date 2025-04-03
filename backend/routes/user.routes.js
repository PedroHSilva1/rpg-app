import { get, getId, getEmail, createUser, updateUser, deleteUser, loginUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../validations/auth.middleware.js";

const userRoutes = (app) => {
    app.get("/users", verifyToken, get); 
    app.get("/users/:id", verifyToken, getId); 
    app.get("/users/email/:email", verifyToken, getEmail); 
    app.post("/users", createUser); 
    app.put("/users/:id", verifyToken, updateUser); 
    app.delete("/users/:id", verifyToken, deleteUser); 
    app.post("/login", loginUser); 
};

export default userRoutes;