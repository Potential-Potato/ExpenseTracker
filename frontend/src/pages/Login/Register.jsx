import React from "react";

const Register = () => {
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
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <button className="bg-green-700 hover:bg-green-800 text-white rounded-md py-2 mt-2">
          Register
        </button>
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
