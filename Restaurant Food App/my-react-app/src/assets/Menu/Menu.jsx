import "./Menu.css";
import { useState, useRef, useContext } from "react";
import ApiFetch from "../APiFetch/ApiFetch";
export default function Menu() {
  const slide = useRef();
  const hr = useRef();

  const HandleSliderRight = () => {
    const line = hr.current;
    line.style.transform = "translateX(170px)";
    line.style.transition = "0.5s ease";
  };

  const HandleSliderRightSeconde = () => {
    const line = hr.current;
    line.style.transform = "translateX(300px)";
    line.style.transition = "0.5s ease";
  };

  const HandleSliderThird = () => {
    const line = hr.current;
    line.style.transform = "translateX(0px)";
    line.style.transition = "0.5s ease";
  };
  return (
    <div className="Menu">
      <hr className="hr1" />
      <h1 className="food-menu">Food Menu</h1>
      <hr className="hr2" />
      <h1 className="popular">Most Popular Items</h1>
      <div className="menu-list">
        <i
          class="bx bxs-coffee-alt"
          ref={slide}
          onClick={HandleSliderThird}
        ></i>
        <h3 className="breakfast" ref={slide} onClick={HandleSliderThird}>
          <span>Popular</span> Breakfast
        </h3>
        <i class="bx bxs-baguette" ref={slide} onClick={HandleSliderRight}></i>
        <h3 className="lunch" ref={slide} onClick={HandleSliderRight}>
          <span>Special</span> Lunch
        </h3>
        <img
          src="Logo.png"
          alt=""
          ref={slide}
          onClick={HandleSliderRightSeconde}
        />
        <h3 className="dinner" ref={slide} onClick={HandleSliderRightSeconde}>
          <span>Lovely</span> Dinner
        </h3>
      </div>
      <hr className="hr3" />
      <hr className="hr4" ref={hr} />
      <ApiFetch />
    </div>
  );
}
