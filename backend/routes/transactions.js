const router = require("express").Router();
const {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controller/transactionCategory");

// route: "/transactions"
router.get("/", getAllTransactions);

router.post("/", addTransaction);

router.patch("/:id", updateTransaction);

router.delete("/:id", deleteTransaction);

module.exports = router;
