import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyJob.css";

function MyJob() {
  const location = useLocation();
  const [jobs, setJobs] = useState(
    () => JSON.parse(localStorage.getItem("jobs")) || []
  );

  useEffect(() => {
    if (location.state?.dataJob) {
      setJobs((prevJobs) => [...prevJobs, ...location.state.dataJob]);
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <div className="MyJob">
      <h1 className="All_My">All My Jobs</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <h3>All Jobs</h3>
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" id="post">
              <Link to="/recruiterpage">
                <button type="button" className="btn btn-primary">
                  Post A New Job
                </button>
              </Link>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Company Name</th>
            <th scope="col">Work Experience</th>
            <th scope="col">Salary</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((element, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{element.job_title}</td>
              <td>{element.company_name}</td>
              <td>{element.work_exp}</td>
              <td>{element.salary}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    const updatedJobs = jobs.filter((_, i) => i !== index);
                    setJobs(updatedJobs);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyJob;
