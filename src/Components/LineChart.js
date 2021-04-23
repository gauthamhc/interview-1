import React from "react";
import HealthConditions from "../Charts/HealthConditions";
import Activity from "../Charts/Activity";
import BloodPressure from "../Charts/BloodPressure";
import HeartRate from "../Charts/HeartRate";
import Labresults from "../Charts/Labresults";

const LineChart = () => {
  return (
    <>
      <h2 className="analytics-header">Analytics</h2>
      <div className="chart-section">
        <div className="chart activity">
          <Activity />
        </div>
        <div className=" chart heartRate">
          <HeartRate />
        </div>
        <div className="chart bloodpressure">
          <BloodPressure />
        </div>

        <div className="chart health-condition">
          <HealthConditions />
        </div>
        <div className="lab-results">
          <Labresults />
        </div>
      </div>
    </>
  );
};

export default LineChart;
