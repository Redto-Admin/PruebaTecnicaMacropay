import { validatePhrasePlugin } from "../plugins/validatePhrase.plugin";

import { BookRepository } from "../repositories/books.repository";
import { book } from "../types/book.type";
export class BookService {
    private bookRepository:BookRepository;
    constructor(){
        this.bookRepository = new BookRepository();
    }
    async getAll(){
        return await this.bookRepository.getAll();
    }
    async getOne(id:string){
        return await this.bookRepository.getOne(id);
    }
    async create(book:book){
        await this.bookRepository.create(book);
    }
    async getFilterByPrice (price:number){
        return await this.bookRepository.filterByPrice(price);
    }
    async getAveragePrice(){
        const books:book[] = await this.bookRepository.getAll();
        return books.reduce((total, book: book) => total + book.price, 0) / books.length;
    }

    async validateBooksByPhrase(phrase: string) {
        const books = await this.bookRepository.getAll();
        const filteredBooks = books.filter((book: book) => {
            const author = book.author.toLowerCase();
      
            const validated = validatePhrasePlugin(author, phrase);
      
            if (validated) {
              return book;
            }
          });
          return filteredBooks;
    }

};
