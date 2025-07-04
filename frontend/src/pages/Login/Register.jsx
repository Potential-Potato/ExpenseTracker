import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const registerFunc = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    if (payload.password !== payload.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await axios.post("/users/register", payload);
      toast.success("Registered successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-50 h-screen w-screen ">
      <section className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-800">
          <span className="text-green-700">🛍️</span>
          <span>KitaKo</span>
        </div>
        <h2 className="text-xl font-semibold text-center">
          Create Your Account
        </h2>
        <form className="flex flex-col gap-4" onSubmit={registerFunc}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white rounded-md py-2 mt-2"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 hover:underline">
            Login
          </a>
        </p>
      </section>
    </div>
  );
};

export default Register;
