const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const pool = require("../db/db");
const { hashPassword, comparePassword } = require("../utils/bcrypt");

// route: "/users"

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY user_id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-users: server error");
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await hashPassword(password);
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    const user = newUser.rows[0];
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET);
    res
      .cookie("jwtToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 3600000, // 1 hour
      })
      .status(200)
      .json({ message: "Login Successful!" });
  } catch (err) {
    console.error("err msg:", err.message);
    res.status(500).send("Router-users: server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userResult = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: "User does not exist!!" });
    }

    const user = userResult.rows[0];
    const match = await comparePassword(password, user.password);
    if (match) {
      const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET);
      res
        .cookie("jwtToken", token, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 3600000, // 1 hour
        })
        .status(200)
        .json({ message: "Login Successful!" });
    } else {
      return res.status(400).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    console.error("err msg:", err.message);
    res.status(500).send("Router-users: server error");
  }
});

router.get("/logout", (req, res) => {
  res
    .clearCookie("jwtToken", { httpOnly: true, secure: true, sameSite: "None" })
    .json({ message: "Logged out successfully" });
});
module.exports = router;
