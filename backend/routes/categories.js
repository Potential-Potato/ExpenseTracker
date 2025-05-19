const router = require("express").Router();
const pool = require("../db/db");

// route: "/categories"

router.get("/", async (req, res) => {
  try {
    const user = req.user;

    const result = await pool.query(
      "SELECT * FROM categories WHERE user_id = $1 OR user_id IS NULL ORDER BY type ASC",
      [user.user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("err msg:", err.message);
    res.status(500).send("Router-categories: server error");
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name, type } = req.body;
    const user = req.user;
    const newCat = await pool.query(
      "INSERT INTO categories (user_id, name, type) VALUES ($1, $2, $3) RETURNING *",
      [user.user_id, name, type]
    );
    res.json(newCat.rows);
  } catch (err) {
    console.error("err msg:", err.message);
    res.status(500).send("Router-categories: server error");
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const { name, type } = req.body;
    const { id } = req.params;
    const user = req.user;

    const category = await pool.query(
      "SELECT * FROM categories WHERE category_id = $1",
      [id]
    );
    if (category.rows.length === 0) {
      return res.status(404).json({ error: "category not found!" });
    }

    const updatedCat = await pool.query(
      "UPDATE categories SET name = $1, type = $2 WHERE category_id = $3 AND user_id = $4 RETURNING *",
      [name, type, id, user.user_id]
    );

    res.status(200).json(updatedCat.rows);
  } catch (err) {
    console.error("err msg:", err.message);
    res.status(500).send("Router-categories: server error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const deleteCat = await pool.query(
      "DELETE FROM categories WHERE category_id = $1 AND user_id = $2 RETURNING *",
      [id, user.user_id]
    );

    if (deleteCat.rowCount === 0) {
      return res.status(404).json({
        message: "Category not found!",
      });
    }
    res.status(200).json("Sucessfully deleted", deleteCat.rows);
  } catch (err) {
    console.error("err msg: ", err.message);
    res.status(500).send("Router-categories: server error");
  }
});
module.exports = router;
