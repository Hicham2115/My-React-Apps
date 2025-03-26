import "./RecreuiterPage.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import MyJob from "../MyJobs/MyJob";

function RecreuiterPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [dataJob, setDataJob] = useState({
    job_title: "",
    company_name: "",
    job_type: "",
    salary: "",
    work_exp: "",
    date_of_posting: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataJob({
      ...dataJob,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", dataJob);

    // Navigate to the MyJob component and pass the state (props)
    navigate("/myjobs", { state: { dataJob: [dataJob] } });
  };

  return (
    <div className="RecreuiterPage">
      <h1>Job Infos </h1>
      <form
        className="row g-3 needs-validation"
        noValidate
        id="form"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            Job Title
          </label>
          <input
            name="job_title"
            value={dataJob.job_title}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Web Developer"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Company Name
          </label>
          <input
            name="company_name"
            value={dataJob.company_name}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Ex : Microsoft"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomUsername" className="form-label">
            Job Type
          </label>
          <div className="input-group has-validation">
            <select
              name="job_type"
              value={dataJob.job_type}
              onChange={handleInputChange}
              className="form-select"
              id="validationCustom04"
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="All">All</option>
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomUsername" className="form-label">
            Salary
          </label>
          <div className="input-group has-validation">
            <select
              name="salary"
              value={dataJob.salary}
              onChange={handleInputChange}
              className="form-select"
              id="validationCustom04"
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomUsername" className="form-label">
            Work Experience
          </label>
          <div className="input-group has-validation">
            <select
              name="work_exp"
              value={dataJob.work_exp}
              onChange={handleInputChange}
              className="form-select"
              id="validationCustom04"
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Junior">Junior</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Pro">Pro</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">
            Date Of Posting
          </label>
          <select
            name="date_of_posting"
            value={dataJob.date_of_posting}
            onChange={handleInputChange}
            className="form-select"
            id="validationCustom04"
            required
          >
            <option value="" disabled>
              Choose...
            </option>
            <option value="Lifetime">Lifetime</option>
            <option value="Yesterday">Yesterday</option>
            <option value="Last 24 hours">Last 24 hours</option>
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last month">Last month</option>
          </select>
        </div>
        <div className="col-md-15">
          <label htmlFor="validationCustom01" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            value={dataJob.description}
            onChange={handleInputChange}
            className="form-control"
            aria-label="With textarea"
            placeholder="Write ..."
          ></textarea>
        </div>
        <div className="col-12">
          <div
            className="form-check"
            style={{
              marginLeft: "500px",
            }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            style={{
              marginLeft: "550px",
              marginBottom: "10px",
              width: "150px",
              height: "45px",
            }}
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecreuiterPage;
