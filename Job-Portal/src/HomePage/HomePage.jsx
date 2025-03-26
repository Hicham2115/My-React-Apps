import { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route, Link, useParams } from "react-router-dom";

function HomePage({ HandlePositionFilter, HandleLocation }) {
  const inputvalue = useRef(null);
  const inputvalue1 = useRef(null);
  return (
    <div
      className="home"
      style={{ backgroundColor: "white", marginTop: "-50px" }}
    >
      <h1 className="Find">
        Find Your <span>New Job</span> Today
      </h1>
      <h3 className="Thousands">
        Thousands Of Jobs In The Computer , Engineering And Technology Sectors
        Are Waiting For You.
      </h3>
      <div class="input-group mb-3 w-50 p-3 ">
        <i class="bx bx-search-alt-2"></i>
        <input
          type="text"
          id="input"
          class="form-control rounded-0 border-dark-subtle"
          placeholder="What Postion Are You Looking For?"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={inputvalue}
          onChange={() => HandlePositionFilter(inputvalue.current.value)}
        />
      </div>
      <div class="input-group mb-3" id="input1">
        <i class="bx bx-location-plus"></i>
        <input
          type="text"
          id="input2"
          class="form-control rounded-0 border-dark-subtle"
          placeholder="Location"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={inputvalue1}
        />
      </div>
      <button type="button" class="btn btn-primary" id="search">
        Search
      </button>
    </div>
  );
}

export default HomePage;
