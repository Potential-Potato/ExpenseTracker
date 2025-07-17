const router = require("express").Router();

const {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");

// route: "/categories"

router.get("/", getAllCategories);

router.post("/", addCategory);

router.patch("/:id", updateCategory);

router.delete("/:id", deleteCategory);
module.exports = router;
