import React, { useState } from "react";
import "./Bmi.css";
function Bmi() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [bmiStatus, setBMIStatus] = useState("");
  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      const calculatedBMI = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBMI(calculatedBMI);

      // Determine BMI status
      if (calculatedBMI < 18.5) {
        setBMIStatus("Underweight");
      } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        setBMIStatus("Normal weight");
      } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        setBMIStatus("Overweight");
      } else {
        setBMIStatus("Obesity");
      }
      setHeight("");
      setWeight("");
      setAge("");
    }
  };
  return (
    <div className="container">
      <div className="container-fluid position-relative bmi my-5">
        <div className="row px-3 align-items-center">
          <div className="col-md-6">
            <div className="pr-md-3 d-none d-md-block">
              <h4 className="new1">Body Mass Index </h4>
              <h4 className="display-4 text-white font-weight-bold mb-4">
                What is BMI?
              </h4>
              <p className="m-0 text-white">
                Body mass index is a value derived from the mass and height of a
                person. The BMI is defined as the body mass divided by the
                square of the body height, and is expressed in units of kg/m²,
                resulting from mass in kilograms and height in metres
              </p>
            </div>
          </div>
          <div className="col-md-6 bg-secondary py-5">
            <div className="py-5 px-3">
              <h1 className="mb-4 text-white">Calculate your BMI</h1>
              <form onSubmit={calculateBMI}>
                <div className="form-row">
                  <div className="col form-group">
                    <input
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="form-control form-control-lg "
                      placeholder="Weight (KG)"
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="text"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="form-control form-control-lg  "
                      placeholder="Height (CM)"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      style={{ width: " fit-content" }}
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <select className="col form-group form-control-lg">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      value="Calculate Now"
                      style={{ width: "123px", color: "white", height: "41px" }}
                    >
                      Calculate
                    </button>
                  </div>
                </div>
              </form>
              {bmi && (
                <div style={{ marginTop: "20px" }}>
                  <h3>Your BMI: {bmi}</h3>
                  <p>Status: {bmiStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
