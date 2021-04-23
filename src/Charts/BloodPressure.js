import React from "react";
import { Line } from "react-chartjs-2";

const BloodPressure = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        data: [20, 23, 22, 21],
        label: "Blood Pressure",
        borderColor: "#d9534f",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};

export default BloodPressure;
