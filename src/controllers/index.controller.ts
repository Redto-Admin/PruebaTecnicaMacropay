import { BookController } from './book.controller';
const bookController = new BookController();
export { bookController as BookController };

import { AuthController } from './auth.controller';
const authController = new AuthController();
export { authController as AuthController };


import { BookService } from '../services/book.service';
const bookService = new BookService();
export { bookService as BookService };

import { BookRepository } from '../repositories/books.repository';
const bookRepository = new BookRepository();
export { bookRepository as BookRepository };