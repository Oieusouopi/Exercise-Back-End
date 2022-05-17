const router = require('express').Router();
const booksController = require('../controllers/booksController');

router.get('/books', booksController.getAllBooks);

router.get('/books/:id', booksController.getIdBooks);

router.post('/books', booksController.postBook);

router.put('/books/:id', booksController.putBook);

router.delete('/books/:id', booksController.deleteBook);

module.exports = router;