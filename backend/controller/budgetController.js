const pool = require("../db/db");

const getAllBudget = async (req, res) => {
  try {
    const user = req.user;
    const result = await pool.query("SELECT * FROM budget WHERE user_id = $1", [
      user.user_id,
    ]);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-budget: server error");
  }
};

const addBudget = async (req, res) => {
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
};

const updateBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_id, amount, startDate, endDate } = req.body;
    const user = req.user;

    const updateBudget = await pool.query(
      "UPDATE budget SET user_id = $2 category_id = $3 amount = $4 startDate = $5 endDate = $6 WHERE budget_id = $1",
      [id, user, category_id, amount, startDate, endDate]
    );

    res.json({ message: "Budget was updated" });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Router-budget: server error");
  }
};

const deleteBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBudget = await pool.query(
      "DELETE FROM budget WHERE budget_id = $1",
      [id]
    );
    res.json({ message: "Todo was deleted" });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllBudget,
  addBudget,
  updateBudget,
  deleteBudget,
};
