import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Expenses",
      data: [35, 40, 45, 50, 65, 60, 55],
      backgroundColor: "#10b981",
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function ExpenseTrackerPage() {
  return (
    <main className="bg-white min-h-screen p-6 font-sans text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Expense Tracker</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dashboard */}
        <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-3xl font-bold">$115,385</p>
          <p className="text-sm text-gray-500">Available / 2024</p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-yellow-600 text-sm">🍔</p>
              <p className="text-lg font-semibold">156</p>
              <p className="text-xs text-gray-400">Spending</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-indigo-600 text-sm">💡</p>
              <p className="text-lg font-semibold">125</p>
              <p className="text-xs text-gray-400">Spending</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-orange-600 text-sm">🪙</p>
              <p className="text-lg font-semibold">641</p>
              <p className="text-xs text-gray-400">Spending</p>
            </div>
          </div>
        </section>

        {/* Chart */}
        <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>
          <Bar data={data} options={options} />
        </section>
      </div>

      {/* Mobile View */}
      <section className="mt-12 max-w-md mx-auto bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Mobile View</h2>
        <div className="space-y-4">
          {[
            { label: "Casual", amount: "$30.29" },
            { label: "Groceries", amount: "$18.09" },
            { label: "Transport", amount: "$48.85" },
          ].map(({ label, amount }) => (
            <div
              key={label}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-lg font-medium">{amount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
