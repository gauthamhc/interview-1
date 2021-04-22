import React from "react";
import { Line } from "react-chartjs-2";

const BloodPressure = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        data: [20, 30, 20, 30],
        label: "Blood Pressure",
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

export default BloodPressure;
