const express = require("express");
const router = express.Router();
const routerUsers = require("./user.route");
router.use("/user", routerUsers);
module.exports = router;
