import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Filter from "./Filter/Filter";
import Middle from "./Middle/Middle";
import RecreuiterPage from "./RecreuiterPage/RecreuiterPage";
import MyJob from "./MyJobs/MyJob";
// import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";
import Categories from "./Categories/Categories";
import Recruiters from "./Recruiters/Recruiters";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios
      .get("ApiData1.json")
      .then((response) => {
        setJobs(response.data.results);
        setFilteredJobs(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleTypeFilter = (type) => {
    if (type === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => job.contract_time === type);
      setFilteredJobs(filtered);
    }
  };

  const HandlePositionFilter = (type) => {
    console.log(type);
    if (type === "") {
      setFilteredJobs(jobs);
    } else {
      const Position = jobs.filter((job) => job.title === type);
      console.log(Position);
      setFilteredJobs(Position);
    }
  };

  const HandleLocation = (type) => {
    if (type === "") {
      setFilteredJobs(jobs);
    } else {
      const location = jobs.filter((job) => job.location.area[0] === type);
      setFilteredJobs(location);
    }
  };

  const HandleExperience = (type) => {
    if (type === "") {
      setFilteredJobs(jobs);
    } else {
      const experience = jobs.filter((job) => job.work_experience === type);
      setFilteredJobs(experience);
    }
  };

  const HandleDate = (type) => {
    if (type === "") {
      setFilteredJobs(jobs);
    } else {
      const date = jobs.filter((job) => job.Date_Of_Posting === type);
      setFilteredJobs(date);
    }
  };

  const Handlesalary = (type) => {
    if (type === "") {
      setFilteredJobs(jobs);
    } else {
      const salary = jobs.filter((job) => job.salary_type === type);
      setFilteredJobs(salary);
    }
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Recruiters />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="findjob"
          element={
            <>
              <HomePage
                HandlePositionFilter={HandlePositionFilter}
                HandleLocation={HandleLocation}
              />
              <Filter
                handleTypeFilter={handleTypeFilter}
                HandleExperience={HandleExperience}
                handleDate={HandleDate}
                handleSalary={Handlesalary}
              />
              <Middle jobs={filteredJobs} />
            </>
          }
        />

        <Route path="recruiterpage" element={<RecreuiterPage />} />
        <Route path="myjobs" element={<MyJob />} />
      </Routes>
    </>
  );
}
export default App;
