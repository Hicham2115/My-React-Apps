import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/Yellow and Black Minimalist Creative Hub Logo .png";
import ScrollUpButton from "react-scroll-up";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function NavBar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg">
        <RouterLink to="/">
          <img
            src={logo}
            alt=""
            width={"200px"}
            style={{
              marginLeft: "40px",
              marginTop: "-60px",
            }}
          />
        </RouterLink>

        <div class="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {user ? (
              <div
                className="user"
                style={{
                  display: "flex",
                  gap: "20px",
                  position: "absolute",
                  left: "480px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    marginTop: "15px",
                    marginLeft: "-550px",
                  }}
                >
                  <li class="nav-item">
                    <RouterLink
                      to="myjobs"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a
                        class="nav-link active"
                        href="#"
                        style={{ marginRight: "80px" }}
                      >
                        My Jobs
                      </a>
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink
                      to="recruiterpage"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a
                        class="nav-link active"
                        href="#"
                        style={{ marginRight: "200px" }}
                      >
                        Post A Job
                      </a>
                    </RouterLink>
                  </li>
                </ul>
                <p style={{ position: "relative", top: "10px" }}>Hi: </p>
                <p style={{ position: "relative", top: "10px" }}>
                  {user.firstName + " " + user.lastName}
                </p>
                <UserButton />
              </div>
            ) : (
              <>
                <ul
                  class="navbar-nav me-auto mb-2 mb-lg-0"
                  style={{ marginLeft: "150px", marginTop: "-40px" }}
                >
                  <li class="nav-item">
                    <RouterLink
                      to="/findjob"
                      style={{ textDecoration: "none" }}
                    >
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="#"
                        style={{ marginRight: "40px" }}
                      >
                        Find A Job
                      </a>
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <Link to="Categories" smooth={true} duration={500}>
                      <a
                        class="nav-link active"
                        href="#"
                        style={{ marginRight: "40px" }}
                      >
                        Categories
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Recruiters" smooth={true} duration={500}>
                      <a
                        class="nav-link active"
                        href="#"
                        style={{ marginRight: "40px" }}
                      >
                        Recruiters
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Contact" smooth={true} duration={500}>
                      <a
                        class="nav-link active"
                        href="#"
                        style={{ marginRight: "40px" }}
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
                <a
                  href=""
                  style={{
                    marginTop: "-60px",
                    marginRight: "40px",
                    color: "black",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    openSignIn();
                  }}
                >
                  Register
                </a>

                <form className="d-flex" role="search">
                  <button
                    className="btn btn-primary"
                    id="Sign"
                    type="submit"
                    style={{
                      marginTop: "-50px",
                      marginRight: "70px",
                      width: "100px",
                      height: "45px",
                      backgroundColor: "#3b63f5",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openSignIn();
                    }}
                  >
                    Sign in
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </nav>
      <ScrollUpButton
        showUnder={160}
        style={{
          backgroundColor: "#3b63f5",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          bottom: "20px",
          right: "20px",
          color: "white",
        }}
      >
        <span>
          <i
            class="bx bx-up-arrow-alt"
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              fontSize: "30px",
              marginTop: "10px",
              zIndex: "5",
            }}
          ></i>
        </span>
      </ScrollUpButton>
    </div>
  );
}

export default NavBar;
