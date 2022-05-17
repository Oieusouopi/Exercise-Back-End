const booksService = require('../service/booksService');

// HELPERS
const httpCode = require('../helpers/httpsCode');

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

module.exports = {
    getAllBooks,
    getIdBooks,
};