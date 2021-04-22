import React, { useState } from "react";
import { patients } from "./data";

const Title = () => {
  return (
    <div className="container">
      <div className="patients">
        {patients.map((patient) => {
          const {
            id,
            name,
            age,
            IdDetails,
            condition,
            initialDate,
            endDate,
          } = patient;
          return (
            <div key={id} className=" patient-detail">
              <h3>
                {name} <span>{age}</span>{" "}
              </h3>
              <p>{IdDetails}</p>
              <p>{condition}</p>
              <p>{initialDate}</p>
              <p>{endDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Title;
