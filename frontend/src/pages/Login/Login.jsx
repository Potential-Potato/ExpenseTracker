import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("/users/login", {
        username,
        password,
      });

      if (result.data?.message === "Login Successful!") {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-50 h-screen w-screen ">
      <section className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-800">
          <span className="text-green-700">🛍️</span>
          <span>KitaKo</span>
        </div>
        <h2 className="text-xl font-semibold text-center">Welcome Back</h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            className="border border-gray-300 rounded-md px-4 py-2"
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white rounded-md py-2 mt-2"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-green-700 hover:underline">
            Register
          </a>
        </p>
      </section>
    </div>
  );
};

export default Login;
