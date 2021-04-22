import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        type: "line",
        label: "Sales for 2020",
        data: [3, 2, 4, 2, 5, 4],
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };
  return <Line data={data} />;
};

export default LineChart;
