const {
  login,
  logout,
  signup,
  updateId,
  all,
  getUserId,
  deleteUser,
  me,
} = require("../controllers/user.controller");
const { validateUser } = require("../middlewares/auth");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.put("/update/:id", updateId);
router.delete("/delete/:id", deleteUser);
router.get("/me", validateUser, me);
router.get("/all", all);
router.get("/:id", getUserId);

module.exports = router;
