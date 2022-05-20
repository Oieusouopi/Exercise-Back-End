const router = require('express').Router();

const employeesController = require('../controllers/employeesController');

router.get('/employees', employeesController.getAllEmployees);

// router.post('/employees',);

// router.put('/employees/:id',);

// router.delete('/employees/:id');

// router.get('/employees/:id');

module.exports = router;