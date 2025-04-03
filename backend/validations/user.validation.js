import * as yup from "yup";
import { validationResult, body } from "express-validator";

// Validação com Yup
export const userValidationSchema = yup.object({
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
    password: yup.string().required("A senha é obrigatória.").min(6, "A senha deve ter pelo menos 6 caracteres."),
});

// Middleware para validação com Yup
export const validateUser = async (req, res, next) => {
    try {
        await userValidationSchema.validate(req.body, { abortEarly: false });
        next(); // Continua para o próximo middleware ou controller
    } catch (e) {
        res.status(400).send({ errors: e.errors });
    }
};

// Middleware para sanitização com express-validator
export const sanitizeUser = [
    body("name").trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];