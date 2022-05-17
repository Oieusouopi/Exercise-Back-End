const { books } = require('../models/');
const validMessageCode = require('./validMesageCode');

// HELPERS
const httpCode = require('../helpers/httpsCode');
const message = require('../helpers/message');

const getAllBooks = async () => {
    const allBooks = await books.findAll();
    return allBooks;
};

const validBook = (book) => {
  if (book === null) throw validMessageCode(httpCode.NOT_FOUND, message.BOOKS_NOT_FOUND);
};

const getIdBooks = async (id) => {
    const book = await books.findByPk(Number(id));
    validBook(book)
    return book;
};

module.exports = {
    getAllBooks,
    getIdBooks,
};