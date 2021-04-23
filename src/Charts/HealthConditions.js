import React from "react";
import { Line } from "react-chartjs-2";

const HealthConditions = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        data: [20, 22, 21, 24],
        label: "Health Conditions",
        borderColor: "#5cb85c",
        fill: false,
        tension: 0.6,
      },
    ],
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};

export default HealthConditions;
