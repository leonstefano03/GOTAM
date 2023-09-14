const { login, logout, signup, updateId, all, getUserId, deleteUser } = require("../controllers/user.controller");

const express = require("express");
  const router = express.Router();

  router.post('/login', login )
  router.post('/signup',signup)
  router.post('/logout',logout)
  router.put('/update/:id',updateId)
  router.delete('/delete/:id',deleteUser)
  router.get('/all',all)
  router.get('/:id',getUserId)

  module.exports = router