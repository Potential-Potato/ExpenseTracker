const router = require("express").Router();
const pool = require("../db/db");

// route: "/"

router.get("/", async (req, res) => {
  try {
    const currentUser = req.user;
    res.status(200).json({ currentUser }); // ✅ respond with it
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-users: server error");
  }
});
module.exports = router;
