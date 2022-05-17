const router = require('express').Router();
const booksController = require('../controllers/booksController');

router.get('/books', booksController.getAllBooks);

router.get('/books/:id', booksController.getIdBooks);

module.exports = router;