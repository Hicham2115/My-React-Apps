import "./assets/Header1.css";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Footer from "./assets/Footer/Footer";
import { useEffect, useRef } from "react";

export default function RedirectContact() {
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

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
            </li>
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
          style={{ color: "white", fontSize: "100px", marginLeft: "20px" }}
        >
          Contact
        </h1>
      </div>
      <h1
        className="redirect-contact"
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Contact For Any Query
      </h1>
      <div
        className="contactinfo"
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "#ffa217",
          fontFamily: "Pacifico",
        }}
      >
        <h2>Booking</h2>
        <h2>General</h2>
        <h2>Technical</h2>
      </div>
      <div
        className="adresses"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2>book@example.com</h2>
        <h2>info@example.com</h2>
        <h2>tech@example.com</h2>
      </div>
      <div
        className="is"
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: " #ffa217",
          fontSize: "25px",
          position: "relative",
          left: "-130px",
          top: "-45px",
        }}
      >
        <i class="bx bxs-envelope"></i>
        <i class="bx bxs-envelope"></i>
        <i class="bx bxs-envelope"></i>
      </div>

      <div style={{ height: "70vh", width: "50%", marginLeft: "20px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
        <form
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "650px",
            marginTop: "-380px",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              height: "50px",
              width: "260px",
              paddingLeft: "20px",
              border: "solid 2px #ffa217",
              borderRadius: "10px",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              height: "50px",
              width: "260px",
              position: "relative",
              left: "300px",
              top: "-75px",
              paddingLeft: "20px",
              border: "solid 2px #ffa217",
              borderRadius: "10px",
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            style={{
              height: "50px",
              width: "560px",
              position: "relative",
              top: "-70px",
              paddingLeft: "20px",
              border: "solid 2px #ffa217",
              borderRadius: "10px",
            }}
          />
          <textarea
            placeholder="Message"
            style={{
              height: "150px",
              width: "545px",
              position: "relative",
              top: "-70px",
              padding: "20px",
              border: "solid 2px #ffa217",
              borderRadius: "10px",
            }}
          ></textarea>

          <button
            style={{
              position: "relative",
              left: "-700px",
              top: "-50px",
            }}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
