import "./assets/Header1.css";
import { Link } from "react-router-dom";
import Footer from "./assets/Footer/Footer";
import { useEffect, useRef } from "react";
import Reservation from "./assets/Reservation/Reservation";
export default function RedirectBooking() {
  const hover = useRef(null);
  const dropdown = useRef(null);
  useEffect(() => {
    const effect = hover.current;
    const dropdowneffect = dropdown.current;

    if (effect && dropdowneffect) {
      const handleMouseOver = () => {
        dropdowneffect.style.visibility = "visible";
      };

      const handleMouseOut = () => {
        dropdowneffect.style.visibility = "hidden";
      };

      effect.addEventListener("mouseover", handleMouseOver);
      dropdowneffect.addEventListener("mouseleave", handleMouseOut);

      return () => {
        effect.removeEventListener("mouseover", handleMouseOver);
        effect.removeEventListener("mouseout", handleMouseOut);
        dropdowneffect.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, []);
  return (
    <>
      <div className="header">
        <img src="Logo.png" alt="Logo" />
        <h1>Restoran</h1>
        <nav className="nav">
          <ul className="ul">
            <li>
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>{" "}
            <li className="About">
              <Link
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                style={{ color: "white", textDecoration: "none" }}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                style={{ color: "white", textDecoration: "none" }}
              >
                Menu
              </Link>
            </li>
            <li className="page" ref={hover}>
              Pages <span>▾</span>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
            <button className="btn">
              {" "}
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Book A Table
              </Link>
            </button>
          </ul>
        </nav>
        <div className="divedrop" ref={dropdown}>
          <Link to="/booking">Booking</Link>
          <Link to="/ourteam">Our Team </Link>
          <Link to="/testimonial">Testimonial</Link>
        </div>
        <h1
          className="redirect-about-us-h1"
          style={{ color: "white", fontSize: "100px" }}
        >
          Booking
        </h1>
      </div>
      <Reservation />
      <Footer />
    </>
  );
}
