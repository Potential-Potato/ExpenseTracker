const router = require("express").Router();
const pool = require("../db/db");

// route: "/budgets"

router.get("/", async (req, res) => {
  try {
    const user = req.user;
    const result = await pool.query("SELECT * FROM budget WHERE user_Id = $1", [
      user.user_id,
    ]);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-budget: server error");
  }
});

router.post("/add", async (req, res) => {
  try {
    const { category_id, amount, startDate, endDate } = req.body;
    const user = req.user;
    const newBudget = await pool.query(
      "INSERT INTO budget (user_id, category_id, amount, startDate, endDate) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [user.user_id, category_id, amount, startDate, endDate]
    );
    res.status(200).json(newBudget.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-budget: server error");
  }
});
module.exports = router;
