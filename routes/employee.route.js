const express = require("express");
const {createEmployee, updateIdEmployee, deleteEmployee, allEmployee, getEmployeeId} = require('../controllers/employee.controller')
const router = express.Router();


  router.post('/create',createEmployee)
  router.put('/update/:id',updateIdEmployee)
  router.delete('/delete/:id',deleteEmployee)
  router.get('/all',allEmployee)
  router.get('/:id',getEmployeeId)

  module.exports = router