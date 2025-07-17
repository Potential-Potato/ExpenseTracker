const express = require("express");
const router = express.Router();

const {
  getAllUser,
  registerUser,
  loginUser,
  logOut,
} = require("../controller/userController");

// route: "/users"

router.get("/", getAllUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logOut);

module.exports = router;
