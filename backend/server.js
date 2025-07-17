require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwtAuth = require("./middleware/jwtAuth");
const PORT = process.env.PORT;
const app = express();

const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
const transacRoutes = require("./routes/transactions");
const categoryRoutes = require("./routes/categories");
const budgetRoutes = require("./routes/budgets");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://todo-list-a4fs.onrender.com"
        : "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

//option 1: allow all origin
// app.use(cors());

app.use("/users", userRoutes);
app.use("/transactions", jwtAuth, transacRoutes);
app.use("/categories", jwtAuth, categoryRoutes);
app.use("/budgets", jwtAuth, budgetRoutes);
app.use("/", jwtAuth, indexRoutes);

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
