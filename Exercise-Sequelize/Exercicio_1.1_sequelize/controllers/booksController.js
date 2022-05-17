const booksService = require('../service/booksService');

// HELPERS
const httpCode = require('../helpers/httpsCode');
const message = require('../helpers/message');

const getAllBooks = async (__req, res, next) => {
 try {
     //pegar todos os livros
     const allBooks = await booksService.getAllBooks();
     res.status(httpCode.OK).json(allBooks);
 } catch (error) {
     next(error);
 }
};

const getIdBooks = async (req, res, next) => {
 try {
     const { id } = req.params
     const book = await booksService.getIdBooks(id);
     res.status(httpCode.OK).json(book);
 } catch (error) {
    next(error); 
 }
};

const postBook = async (req, res, next) => {
 try {
     const { title, author, pageQuantity } = req.body;
     await booksService.postBook(title, author, pageQuantity);
     res.status(httpCode.CREATED).json(message.BOOK_CREATED);
 } catch (error) {
     next(error);
 }
};

const putBook = async (req, res, next) => {
 try {
     const { id } = req.params;
     const { title, author, pageQuantity } = req.body;
     await booksService.putBook(id, title, author, pageQuantity);
     res.status(httpCode.OK).json(message.BOOK_UPDATE);
 } catch (error) {
     next(error);
 }
};

const deleteBook = async (req, res, next) => {
 try {
     const { id } = req.params;
     await booksService.deleteBook(id);
     res.status(httpCode.NO_CONTENT).json(message.BOOK_DELETE);
 } catch (error) {
     next(error);
 }
};

module.exports = {
    getAllBooks,
    getIdBooks,
    postBook,
    putBook,
    deleteBook
};