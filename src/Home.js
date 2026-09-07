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