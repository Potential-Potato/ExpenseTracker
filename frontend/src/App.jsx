import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";

//pages
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";
import Home from "./pages/Home";
import ExpenseTrackerPage from "./pages/ExpenseTrackerPage";
import Layout from "./layout/Layout";
import Chart from "./pages/Chart";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="budget" element={<Budget />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/ex" element={<ExpenseTrackerPage />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;
