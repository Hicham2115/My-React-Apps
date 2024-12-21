import "./RedirectMenu.css";
import "./assets/Header1.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Miscellaneous.css";

export default function Miscellaneous() {
  const hover = useRef(null);
  const dropdown = useRef(null);

  const [meals, setMeals] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const renderMealsWithTitles = (start, end, lineClass) => (
    <div className={lineClass}>
      {meals.slice(start, end).map((meal, index) => (
        <div key={index} className="meal-container">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h1>{meal.strMeal}</h1>
        </div>
      ))}
    </div>
  );

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
          style={{ color: "white", fontSize: "100px", marginLeft: "-100px" }}
        >
          Miscellaneous
        </h1>
      </div>
      <div className="Plats">
        <h1>Miscellaneous Meals</h1>

        {renderMealsWithTitles(0, 7, "miscellaneous")}
        {renderMealsWithTitles(7, 14, "secondline")}
        {renderMealsWithTitles(14, 21, "thirdline")}
        {renderMealsWithTitles(21, 28, "fourthline")}
        {renderMealsWithTitles(28, 35, "fifthline")}
      </div>
    </>
  );
}
