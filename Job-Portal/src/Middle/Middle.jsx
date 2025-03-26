import React from "react";
import "./Middle.css";
import jobpic from "../assets/case.png";
import { Routes, Route, Link, useParams } from "react-router-dom";
import brand1 from "../assets/brand-1.jpg";
import brand2 from "../assets/brand-2.jpg";
import brand3 from "../assets/brand-3.jpg";
import brand4 from "../assets/brand-4.jpg";
import brand5 from "../assets/brand-5.png";
import brand6 from "../assets/brand-6.jpg";
import brand7 from "../assets/brand-7.jpg";
import brand8 from "../assets/brand-8.jpg";
import brand9 from "../assets/brand-9.jpg";
import brand10 from "../assets/brand-10.jpg";
import brand11 from "../assets/brand-11.jpg";
import brand12 from "../assets/brand-12.jpg";
import { useState } from "react";

function Middle({ jobs }) {
  const [images] = useState([
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
  ]);
  console.log(jobs);
  return (
    <div className="middle">
      <h1
        style={{
          marginLeft: "380px",
          marginTop: "-1100px",
          fontSize: "x-large",
          fontWeight: "bold",
        }}
      >
        Latest Jobs
      </h1>

      {jobs.map((element, index) => (
        <div
          className="card"
          id="cardox"
          style={{
            marginLeft: "380px",
            marginTop: "30px",
            width: "60%",
            backgroundColor: "#f7faff",
          }}
          key={index}
        >
          <div className="card-body">
            <img
              src={images[index % images.length]}
              alt={`Brand ${index + 1}`}
            />{" "}
            <div className="content">
              <h5
                className="card-title"
                style={{
                  fontWeight: "bold",
                }}
              >
                {element.title}
              </h5>
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                style={{ color: "#687a9e", fontWeight: "bold" }}
              >
                {element.company?.display_name || "Company name not available"}
              </h6>
              <i className="bx bx-location-plus" id="location"></i>
              <p
                className="card-text"
                style={{
                  marginTop: "-25px",
                  marginLeft: "30px",
                  color: "#687a9e",
                  fontWeight: "bold",
                }}
              >
                {element.location.display_name}
              </p>
              <i className="bx bx-time-five" style={{ fontWeight: "bold" }}></i>
              <p
                style={{
                  marginLeft: "30px",
                  marginTop: "-35px",
                  color: "#687a9e",
                  fontWeight: "bold",
                }}
              >
                {element.contract_time || "contract_time not available"}
              </p>
              <i className="bx bx-dollar" style={{ fontWeight: "bold" }}></i>
              <p
                style={{
                  marginLeft: "30px",
                  marginTop: "-35px",
                  color: "#687a9e",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "black" }}>Salary Max</span> :
                {element.salary_max}$
              </p>
              <p>
                <strong>Description :</strong> {element.description}
              </p>
              <a
                id="details"
                href={element.redirect_url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#3b63f5", border: "none" }}
              >
                View Job Details
                <i class="bx bxs-arrow-to-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Middle;
