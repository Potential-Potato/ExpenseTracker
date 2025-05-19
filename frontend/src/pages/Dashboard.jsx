import React from "react";
import { Card } from "../components/card";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex flex-col flex-grow p-6  ">
        <header className="flex justify-between items-center mb-6 p-4 rounded">
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p>Notif</p>
        </header>
        <section className="flex flex-wrap justify-center gap-6  mb-8">
          <Card title="Foods" amount="5000" image="/" />
          <Card title="Drinks" amount="5000" image="/" />
          <Card title="Travel" amount="5000" image="/" />
          <Card title="Gift" amount="5000" image="/" />
        </section>
        <section className="flex-grow bg-gray-500 rounded-md shadow-inner p-6">
          <div className="text-white text-xl">Graph</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
