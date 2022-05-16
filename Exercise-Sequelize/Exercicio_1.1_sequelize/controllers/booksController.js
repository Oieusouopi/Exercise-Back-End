const { books } = require('../models/');

// HELPERS
const httpCode = require('../helpers/httpsCode');

const getAllBooks = async (__req, res, next) => {
 try {
     //pegar todos os livros
     const allBooks = await books.findAll();
     res.status(httpCode.OK).json(allBooks);
 } catch (error) {
     next(error);
 }
};

module.exports = {
    getAllBooks,
};