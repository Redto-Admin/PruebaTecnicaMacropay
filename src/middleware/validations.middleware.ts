import { body, query } from "express-validator";
import { validateTokenMiddleware } from "./jwt.middleware";

export const validateCreationBookMiddleware = [
    body("id").isString().notEmpty().withMessage("Field is required"),
    body("title").isString().notEmpty().withMessage("Field is required"),
    body("author").isString().notEmpty().withMessage("Field is required"),
    body("price").isFloat().notEmpty().withMessage("Field is required"),
    body("availability").isInt().notEmpty().withMessage("Field is required"),
    body("num_reviews").isInt().notEmpty().withMessage("Field is required"),
    body("stars").isInt().notEmpty().withMessage("Field is required"),
    body("description").isString().notEmpty().withMessage("Field is required"),
    validateTokenMiddleware
];
export const validationPhraseMiddleware = [
    validateTokenMiddleware, 
    query("phrase").isAlpha().withMessage("Phrase must only contain letters")

];
export const validationAuthenticationMiddleware =
    [body("user").isString().notEmpty().withMessage("Field is required"),
    body("password").isString().notEmpty().withMessage("Field is required"),]
        

