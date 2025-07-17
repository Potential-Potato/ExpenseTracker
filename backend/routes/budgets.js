const router = require("express").Router();
const {
  getAllBudget,
  addBudget,
  updateBudget,
  deleteBudget,
} = require("../controller/budgetController");

// route: "/budgets"

router.get("/", getAllBudget);

router.post("/", addBudget);

router.patch("/:id", updateBudget);

router.delete("/:id", deleteBudget);

module.exports = router;
