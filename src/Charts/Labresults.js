import React from "react";

const Labresults = () => {
  return (
    <div>
      <h2>Lab Results</h2>
      <div className="category">
        <div className="category-ind">
          <p>1 August </p>
          <h3>Sugar</h3>
          <h4>140 mg/dL</h4>
        </div>
        <div className="category-ind">
          <p>6 August</p>
          <h3>Hemoglobin</h3>
          <h4>140 mg/dL</h4>
        </div>
        <div className="category-ind">
          <p>8 August</p>
          <h3>Red Blood cell</h3>
          <h4>4.9 million cells/mcl</h4>
        </div>
      </div>
    </div>
  );
};

export default Labresults;
