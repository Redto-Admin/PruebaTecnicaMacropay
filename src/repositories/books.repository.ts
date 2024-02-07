import path from "path";
import { readFilePlugin } from "../plugins/fileRW.plugin";
import { book } from "../types/book.type";

export class BookRepository{
    private filePath 
    private books: book[] 
constructor(){
    this.filePath = path.join(__dirname,'..',"/database/MOCK_DATA.json");
    this.books = readFilePlugin(this.filePath);
}
async getAll(){
    return await this.books;
}
async getOne(id:string){
    return this.books.find((book: book) => book.id == id);
}

async create(book:book){
    console.log(book);
    await this.books.push(book);
}
async filterByPrice(price:number){
    return await this.books.filter((book: book) => book.price > price);
}
}
