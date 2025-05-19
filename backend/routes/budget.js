const router = require("express").Router();

// route: "/budgets"

router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Router-budget: server error");
  }
});
module.exports = router;
