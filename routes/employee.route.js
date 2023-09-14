const express = require("express");
  const router = express.Router();


  router.post('/create',createEmployee)
  router.put('/update/:id',updateIdEmployee)
  router.delete('/delete/:id',deleteEmployee)
  router.get('/all',allEmployee)
  router.get('/:id',getEmployeeId)

  module.exports = router