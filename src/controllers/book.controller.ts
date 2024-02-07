import { Response, Request, NextFunction } from "express";
import { BookService } from "./index.controller";
import { book } from "../types/book.type";
import { validationResult } from "express-validator";


export class BookController {

    public async index(req: Request, res: Response,) {
        res.setHeader("content-type", "text/plain");
        return res.status(200).send("Hello, world!");
    }

    public async getAll(req: Request, res: Response,) {
        const books: book[] = await BookService.getAll();
        return res.json(books);
    }

    public async getOneById(req: Request, res: Response) {
        const { id } = req.params;
        const found = await BookService.getOne(id);
        if (found) {
            return res.json(found);
        }
        return res.status(400).send("ID not found");
    }

    public async getFiltredByPrice(req: Request, res: Response, next: NextFunction) {
        const price = req.query.price;
        if (price === undefined) return next();
        if (isNaN(Number(price))) {
            return res.status(400).send("Price must be a number");
        }
        const found = await BookService.getFilterByPrice(Number(price));
        if (found.length > 0) {
            return res.json(found);
        }
        return res.status(404).send("Books not found");
    }

    public async CreateOne(req: Request, res: Response) {
        const book: book = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        await BookService.create(book);
        return res.json({ message: ' book created', item: book });
    }

    public async getFiltereByPhrase(req: Request, res: Response, next: NextFunction) {
        if (req.query.phrase === undefined) return next();
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const phrase: string = req.query.phrase.toString().toLowerCase();

        const booksFound = await BookService.validateBooksByPhrase(phrase);

        if (booksFound.length == 0) {
            return res.status(404).json({ message: "Not Found" });
        }
        return res.json(booksFound);
    }

    public async getAveragePrice(req: Request, res: Response) {
        let avg: number = await BookService.getAveragePrice();
        return res.json({ average: avg.toFixed(2) });
    }

}