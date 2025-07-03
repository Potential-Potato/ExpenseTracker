const jwt = require("jsonwebtoken");
const pool = require("../db/db");

const jwtAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    console.log("token: ", token);

    if (!token) {
      return res.status(404).json({ error: "No token found!" });
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const userResult = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [data.id]
    );

    if (userResult.rows.length === 0) {
      return res.json({ error: "user does not exist!" }).status(401);
    }

    const user = userResult.rows[0];

    delete user.password;
    delete user.create_at;

    console.log("jwtAuth-Current user: ", user);
    req.user = user;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports = jwtAuth;
