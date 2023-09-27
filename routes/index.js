const express = require("express");
const router = express.Router();
const routerUsers = require("./user.route");
const routerEmployee = require('./employee.route')
const routerArea = require('./area.route')

router.use("/user", routerUsers);
router.use('/employee',routerEmployee)
router.use('/area',routerArea)
module.exports = router;
