# Exp-6-BMI-Calculator

## Date : 07-09-2026
## Register Number : 212225230103

## AIM:

To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to enter their height and weight, calculate their BMI, and display the corresponding health category such as Underweight, Normal, Overweight, or Obese.

## Procedure:

1. Create a React project using create-react-app and open it in VS Code.

2. Create a BMI Calculator component to design the calculator interface.

3. Add input fields for height and weight using React state variables.

4. Create a Calculate button to calculate BMI using the formula:
   BMI = Weight / (Height × Height)

5. Display the calculated BMI value and its category such as Underweight, Normal, Overweight, or Obese.

6. Add CSS styling to make the BMI calculator attractive and responsive.

7. Run and test the application using npm start and verify that the BMI is calculated correctly.

## Program:
App.js
```

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BMI from "./BMI";
import Result from "./Result";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
App.css
```
body {
  font-family: Arial;
  background: #f2f2f2;
}

.container {
  width: 350px;
  margin: 100px auto;
  padding: 25px;
  text-align: center;
  background: white;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
}

button {
  padding: 8px 15px;
  margin-top: 10px;
  background: #333;
  color: white;
  border: 0;
  border-radius: 5px;
}

.error {
  color: red;
}
```
Home.js
```
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <p>Calculate your Body Mass Index</p>

      <Link to="/bmi">
        <button>Start Calculator</button>
      </Link>
    </div>
  );
}

export default Home;
```
BMI.js
```
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

```
Result.js
```
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
```
## Output

![alt text](<Screenshot (35).png>)

![alt text](<Screenshot (36).png>)

![alt text](<Screenshot (37).png>)

## Result:

RESULT:

Thus, the BMI Calculator was successfully created using React, allowing users to enter their height and weight and calculate their BMI with the corresponding category.