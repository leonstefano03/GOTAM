const express = require("express");
const { createArea, deleteArea, all } = require('../controllers/area.controller.js')
const router = express.Router();


  router.post('/create',createArea)
  router.delete('/delete/:id',deleteArea)
  router.get('/all',all)

  module.exports = router