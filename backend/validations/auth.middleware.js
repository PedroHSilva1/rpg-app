import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extrai o token do cabeçalho

    if (!token) {
        return res.status(401).send({ error: "Token não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token
        req.user = decoded; // Armazena os dados do usuário no objeto `req`
        next(); // Continua para o próximo middleware ou rota
    } catch (error) {
        return res.status(401).send({ error: "Token inválido." });
    }
};