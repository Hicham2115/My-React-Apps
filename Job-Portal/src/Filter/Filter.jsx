import React, { useRef } from "react";
import "./Filter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Filter({
  handleTypeFilter,
  HandleExperience,
  handleDate,
  handleSalary,
}) {
  return (
    <div className="filter">
      <div
        className="card rounded-0 border-0"
        style={{ width: "18rem", marginLeft: "50px" }}
      >
        <div className="card-body" id="card-body">
          <h5
            className="card-title"
            style={{ marginLeft: "10px", color: "#3b63f5", fontWeight: "bold" }}
          >
            Filters
          </h5>
          <h5
            className="card-title"
            style={{ marginLeft: "10px", marginTop: "50px" }}
          >
            Job Type
          </h5>
          <ul className="ul">
            <br />
            <input
              type="radio"
              name="radio1"
              onChange={() => handleTypeFilter("")}
            />
            <label>All </label>
            <br />
            <input
              type="radio"
              name="radio1"
              onChange={() => handleTypeFilter("full_time")}
            />
            <label>Full Time</label>
            <br />
            <input
              type="radio"
              name="radio1"
              onChange={() => handleTypeFilter("part_time")}
            />
            <label>Part Time</label>
            <br />
            <h5
              className="card-title"
              style={{ marginLeft: "10px", marginTop: "50px" }}
            >
              Salary
            </h5>
            <br />
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={() => handleSalary("hourly")}
              >
                Hourly
              </button>
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={() => handleSalary("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={() => handleSalary("yearly")}
              >
                Yearly
              </button>
            </div>
            <h5
              className="card-title"
              style={{ marginLeft: "10px", marginTop: "50px" }}
            >
              Work Experience
            </h5>
            <br />
            <input
              type="radio"
              name="radio2"
              onChange={() => HandleExperience("Junior")}
            />
            <label>Junior</label>
            <br />
            <input
              type="radio"
              name="radio2"
              onChange={() => HandleExperience("Intermediate")}
            />
            <label>Intermediate</label>
            <br />
            <input
              type="radio"
              name="radio2"
              onChange={() => HandleExperience("Pro")}
            />
            <label>Pro</label>
            <br />

            <h5
              className="card-title"
              style={{ marginLeft: "10px", marginTop: "50px" }}
            >
              Date Of Posting
            </h5>
            <br />
            <input
              type="radio"
              name="radio3"
              onChange={() => handleDate("Lifetime")}
            />
            <label>Lifetime</label>
            <br />
            <input
              type="radio"
              name="radio3"
              onChange={() => handleDate("Yesterday")}
            />
            <label>Yesterday</label>
            <br />
            <input
              type="radio"
              name="radio3"
              onChange={() => handleDate("Last 24 hours")}
            />
            <label>Last 24 hours</label>
            <br />
            <input
              type="radio"
              name="radio3"
              onChange={() => handleDate("Last 7 days")}
            />
            <label>Last 7 days</label>
            <br />
            <input
              type="radio"
              name="radio3"
              onChange={() => handleDate("Last month")}
            />
            <label>Last month</label>
            <br />
          </ul>
        </div>
      </div>
      <div class="card" id="card2">
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              marginBottom: "20px",
            }}
          >
            <i class="bx bxs-envelope"></i> Email Me For Jobs
          </h5>
          <p class="card-text">
            Email me to discuss new professional opportunities and collaborate
            on exciting projects!
          </p>
          <div class="input-group mb-3" style={{ width: "100%" }}>
            <input
              type="text"
              class="form-control"
              placeholder="name@gmail.com"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <button
            type="button"
            id="btnox"
            class="btn btn-primary btn-lg"
            style={{ backgroundColor: "#3b63f5" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
