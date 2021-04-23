import React from "react";
import { Bar } from "react-chartjs-2";

const HeartRate = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        data: [20, 30, 20, 30],
        label: "Heart Rate",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar data={data} />
    </>
  );
};

export default HeartRate;
