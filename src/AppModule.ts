import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { AuthController, BookController } from "./controllers/index.controller";
import { validateCreationBookMiddleware,validationPhraseMiddleware,validationAuthenticationMiddleware } from "./middleware/validations.middleware";
import { validateTokenMiddleware } from "./middleware/jwt.middleware";

dotenv.config();

export default class AppModule {
    private app: Express;
    private port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3005;
        this.middlewares();
        this.routes();
    };
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.get('/',[validateTokenMiddleware], BookController.index);
        this.app.get('/books/average',[validateTokenMiddleware], BookController.getAveragePrice);
        this.app.get('/books',[validateTokenMiddleware], BookController.getFiltredByPrice);
        this.app.get('/books',validationPhraseMiddleware, BookController.getFiltereByPhrase);
        this.app.get('/books',[validateTokenMiddleware], BookController.getAll);
        this.app.get('/books/:id',[validateTokenMiddleware], BookController.getOneById);
        this.app.post('/books', validateCreationBookMiddleware ,BookController.CreateOne);
        this.app.post('/auth', validationAuthenticationMiddleware, AuthController.index);
        
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`[server]: Server is running at http://localhost:${this.port}`);
        });
    }

}
