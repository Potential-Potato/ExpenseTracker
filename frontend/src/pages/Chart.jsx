import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Chart = () => {
  return (
    <div>
      <div>
        {" "}
        <Line
          data={{
            labels: ["Nasd", "dd", "Csss"],
            datasets: [
              //
              {
                label: "Prod1",
                data: [200, 300, 890],
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
              {
                label: "Prod2",
                data: [400, 800, 1200],
                backgroundColor: [
                  "rgba(143, 63, 229, 0.8)",
                  "rgba(250, 142, 19, 0.8)",
                  "rgba(253, 200, 122, 0.8)",
                ],
              },
            ],
          }}
        />
      </div>
      <div>
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              //number of visuals
              {
                label: "Gains",
                data: [200, 300, 890],
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
              {
                label: "Lossess", //title
                data: [200, 300, 920], //value of bar
                backgroundColor: [
                  //ts the color of the bars per index
                  "rgba(43, 63, 129, 0.8)",
                  "rgba(220, 122, 19, 0.8)",
                  "rgba(43, 135, 105, 0.8)",
                ],
              },
            ],
          }}
        />
      </div>
      <div>
        <Doughnut
          data={{
            labels: ["Nasd", "dd", "Csss"],
            datasets: [
              //
              {
                label: "Gains",
                data: [200, 300, 890],
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
