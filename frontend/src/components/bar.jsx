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

export default function bar() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[35rem]">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
