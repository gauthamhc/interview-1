import React from "react";
import { Line } from "react-chartjs-2";

const Activity = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        data: [20, 21, 22, 25],
        label: "Activity",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};

export default Activity;
