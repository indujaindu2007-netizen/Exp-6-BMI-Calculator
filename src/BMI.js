import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function calculateBMI(e) {
    e.preventDefault();

    if (height === "" || weight === "") {
      setError("Please enter height and weight");
      return;
    }

    if (height <= 0 || weight <= 0) {
      setError("Enter positive values");
      return;
    }

    navigate(`/result?height=${height}&weight=${weight}`);
  }

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <form onSubmit={calculateBMI}>
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />

        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />

        <p className="error">{error}</p>

        <button type="submit">Calculate BMI</button>
      </form>
    </div>
  );
}

export default BMI;