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

const postBook = async (title, author, pageQuantity) => {
  const bookCreate = await books.create({ title, author, pageQuantity });
  return bookCreate.dataValues
};

const putBook = async (id, title, author, pageQuantity) => {
  const booksUpdate = await books.update({ title, author, pageQuantity },{ where: { id } });
  return booksUpdate;
};

const deleteBook = async (id) => {
  const deleteBookId = await books.destroy({ where: { id } });
  return deleteBookId;
};

module.exports = {
    getAllBooks,
    getIdBooks,
    postBook,
    putBook,
    deleteBook
};