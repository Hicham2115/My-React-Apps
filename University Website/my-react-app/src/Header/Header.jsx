import "./Header.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
export default function () {
  return (
    <div className="header-container">
      <div className="overlay">
        <img src="/logo.png" alt="Logo" className="logo" />
        <ul className="NavBar">
          <li className="li">
            <Link to="Home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="li">
            <Link to="welcome" smooth={true} offset={0} duration={500}>
              Program
            </Link>
          </li>
          <li className="li">
            <Link to="About-Section" smooth={true} offset={0} duration={500}>
              About us
            </Link>
          </li>
          <li className="li">
            <Link to="Galery" smooth={true} offset={0} duration={500}>
              Campus
            </Link>
          </li>
          <li className="li">
            <Link to="Testimonials" smooth={true} offset={0} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <button>
              <Link to="Contact" smooth={true} offset={0} duration={500}>
                Contact Us
              </Link>
            </button>
          </li>
        </ul>
        <h1>We Ensure Better Education </h1>
        <h1 className="for">For A Better World </h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and
        </p>
        <p className="ptwo">
          experiences needed to excel in the dynamic field of education
        </p>
        <button className="explore">
          Explore More <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}
