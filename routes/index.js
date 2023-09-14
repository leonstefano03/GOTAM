const express = require("express");
const router = express.Router();
const routerUsers = require("./user.route");
const routerEmployee = require('./employee.route')
router.use("/user", routerUsers);
router.use('/employee',routerEmployee)
module.exports = router;
