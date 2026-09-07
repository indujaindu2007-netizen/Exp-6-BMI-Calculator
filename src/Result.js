import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const height = Number(searchParams.get("height"));
  const weight = Number(searchParams.get("weight"));

  const heightMeter = height / 100;
  const bmi = weight / (heightMeter * heightMeter);

  let category;

  if (bmi < 18.5)
    category = "Underweight";
  else if (bmi < 25)
    category = "Normal Weight";
  else if (bmi < 30)
    category = "Overweight";
  else
    category = "Obese";

  return (
    <div className="container">
      <h1>BMI Result</h1>

      <h2>{bmi.toFixed(2)}</h2>

      <p>Category: {category}</p>

      <button onClick={() => navigate("/bmi")}>
        Calculate Again
      </button>
    </div>
  );
}

export default Result;