import React from "react";
import Card from "../components/card";
import History from "../components/history";
import Bar from "../components/bar";
import { div } from "@tensorflow/tfjs-core";

const Dashboard = () => {
  return (
    <div className="">
      <section className="flex flex-wrap gap-8 p-6 rounded-2xl">
        <div className="mr-8  ">
          <h1 className="text-xl font-semibold mb-2">Budget</h1>
          <p className="text-3xl font-bold">Php 1154.00</p>
          <p className="text-sm text-gray-500">Available / 2024</p>
        </div>
        <Card title="Food" amount="Php 5000.00/??" />
        <Card title="Travel" amount="Php 5000.00/??" />
        <Card title="Clothes" amount="Php 5000.00/??" />
        <Card title="Bills" amount="Php 5000.00/??" />
      </section>

      <section className="flex justify-between items-center pl-6">
        <h2 className="text-xl font-bold mb-2 ">Expenses</h2>
        <button className="bg-slate-10 shadow-md">See All</button>
      </section>
    </div>
  );
};

export default Dashboard;
