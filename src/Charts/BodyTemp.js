import React from "react";
import { Line } from "react-chartjs-2";

const BodyTemperature = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        data: [20, 30, 20, 30],
        label: "Body Temperature",
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

export default BodyTemperature;