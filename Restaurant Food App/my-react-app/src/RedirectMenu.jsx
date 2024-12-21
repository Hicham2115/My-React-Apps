import "./assets/Header1.css";
import "./RedirectMenu.css";
import { Link } from "react-router-dom";
import Footer from "./assets/Footer/Footer";
import { useEffect, useRef, useState } from "react";

export default function RedirectMenu() {
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

  const [data1, setData1] = useState(null);
  const [img0, setImg0] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [img5, setImg5] = useState();
  const [img6, setImg6] = useState();
  const [img7, setImg7] = useState();
  const [img8, setImg8] = useState();

  const [h0, setH0] = useState();
  const [h1, setH1] = useState();
  const [h2, setH2] = useState();
  const [h3, setH3] = useState();
  const [h4, setH4] = useState();
  const [h5, setH5] = useState();
  const [h6, setH6] = useState();
  const [h7, setH7] = useState();
  const [h8, setH8] = useState();

  useEffect(() => {
    Fetch();
  }, []);

  async function Fetch() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      // console.log(response);
      if (!response) {
        throw new Error("Error Fetching");
      }

      const Data = await response.json();
      setData1(Data);
      console.log(Data);
      setImg0(Data.categories[0].strCategoryThumb);
      setImg1(Data.categories[1].strCategoryThumb);
      setImg2(Data.categories[2].strCategoryThumb);
      setImg3(Data.categories[3].strCategoryThumb);
      setImg4(Data.categories[4].strCategoryThumb);
      setImg5(Data.categories[5].strCategoryThumb);
      setImg6(Data.categories[6].strCategoryThumb);
      setImg7(Data.categories[7].strCategoryThumb);
      setImg8(Data.categories[8].strCategoryThumb);

      setH0(Data.categories[0].strCategory);
      setH1(Data.categories[1].strCategory);
      setH2(Data.categories[2].strCategory);
      setH3(Data.categories[3].strCategory);
      setH4(Data.categories[4].strCategory);
      setH5(Data.categories[5].strCategory);
      setH6(Data.categories[6].strCategory);
      setH7(Data.categories[7].strCategory);
      setH8(Data.categories[8].strCategory);
    } catch (error) {
      console.error(error);
    }
  }

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
          style={{ color: "white", fontSize: "100px", marginLeft: "70px" }}
        >
          Menu
        </h1>
      </div>

      <div className="Plats">
        <h1>Categories</h1>
        <div className="categories">
          <Link to="/beef">
            <img src={img0} alt="" />
          </Link>
          <Link to="/chicken">
            <img src={img1} alt="" />
          </Link>
          <Link to="/dessert">
            <img src={img2} alt="" />
          </Link>
          <Link to="/lamb">
            <img src={img3} alt="" />
          </Link>
          <Link to="/miscellaneous">
            <img src={img4} alt="" />
          </Link>
          <Link to="/pasta">
            <img src={img5} alt="" />
          </Link>
          <Link to="/pork">
            <img src={img6} alt="" />
          </Link>
          <Link to="/seafood">
            <img src={img7} alt="" />
          </Link>
          <Link to="/side">
            <img src={img8} alt="" />
          </Link>
        </div>
        <div className="listofh3s">
          <Link to="/beef">
            <h3>{h0}</h3>
          </Link>
          <h3>{h1}</h3>
          <h3>{h2}</h3>
          <h3>{h3}</h3>
          <h3>{h4}</h3>
          <h3>{h5}</h3>
          <h3>{h6}</h3>
          <h3>{h7}</h3>
          <h3>{h8}</h3>
        </div>
      </div>

      <Footer />
    </>
  );
}
