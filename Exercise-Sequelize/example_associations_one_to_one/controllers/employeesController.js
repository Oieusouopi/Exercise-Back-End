const employeesService = require('../services/employeesServices');

const getAllEmployees = async (__req, res, next) => {
  try {
      const allEmployees = await employeesService.getAllEmployees();
      res.status(200).json(allEmployees);
  } catch (error) {
      next(error);
  }
};

module.exports = {
    getAllEmployees,
};