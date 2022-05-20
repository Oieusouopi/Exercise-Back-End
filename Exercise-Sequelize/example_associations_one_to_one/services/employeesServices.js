const { Employee } = require('../models');

const getAllEmployees = async () => {
  const allEmployees = await Employee.findAll();
  return allEmployees;
};

module.exports = {
   getAllEmployees,
};