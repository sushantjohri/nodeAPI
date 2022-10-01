const { Router } = require('express');
const controller = require('./controller')

const router = Router();

//to get all the employees from the table
router.get('/getEmployees', controller.getEmployees);

//to get a selected employee from the table
router.get("/getEmployeeById/:id", controller.getEmployeeById);

//to add an employee
router.post('/createEmployee', controller.addEmployee);

module.exports = router;
