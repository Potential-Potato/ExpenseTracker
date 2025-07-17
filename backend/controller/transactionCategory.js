const pool = require("../db/db");

const getAllTransactions = async (req, res) => {
  try {
    const { month, year } = req.query;
    const user = req.user;

    let query = `SELECT transactions.*, 
       categories.name AS category_name 
       FROM transactions
       JOIN categories ON transactions.category_id = categories.category_id
       WHERE transactions.user_id = $1`;

    // SELECT transactions.*, categories.name AS category_name = prevents ovveride
    const values = [user.user_id];
    let paramIndex = 2;

    if (month && year) {
      query += ` AND EXTRACT(MONTH FROM transactions.date) = $${paramIndex}`;
      values.push(month);
      paramIndex++;

      query += ` AND EXTRACT(YEAR FROM transactions.date) = $${paramIndex}`;
      values.push(year);
      paramIndex++;
    }

    if (req.query.category_id) {
      query += ` AND transactions.category_id = $${paramIndex}`;
      values.push(req.query.category_id);
      paramIndex++;
    }

    query += ` ORDER BY transactions.date ASC`;

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-transactions: server error");
  }
};

const addTransaction = async (req, res) => {
  try {
    const { categoryId, amount, type, description, date, status } = req.body;
    const user = req.user;
    const newTransaction = await pool.query(
      "INSERT INTO transactions (user_id, category_id, amount, type, description, date, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [user.user_id, categoryId, amount, type, description, date, status]
    );
    res.status(200).json(newTransaction.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-transactions: server error");
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryId, amount, type, description, date, status } = req.body;

    const editTransaction = await pool.query(
      "UPDATE transactions SET category_id = $1, amount = $2, type = $3, description = $4, date = $5, status = $6 WHERE transaction_id = $7 RETURNING *",
      [categoryId, amount, type, description, date, status, id]
    );

    if (editTransaction.rows.length === 0) {
      return res.status(404).json({ error: "Transaction not found." });
    }

    res.status(200).json(editTransaction.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-transactions: server error");
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const deleteData = await pool.query(
      "DELETE FROM transactions WHERE transaction_id = $1 AND user_id = $2 RETURNING *",
      [id, user.user_id]
    );

    if (deleteData.rowCount === 0) {
      return res.status(404).json({
        message: "Category not found!",
      });
    }
    res.status(200).json("Sucessfully deleted", deleteData.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-transactions: server error");
  }
};

module.exports = {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
