import "./Team.css";
import { useRef } from "react";
export default function Team() {
  const Slider = useRef();
  const Slider2 = useRef();
  const Slider3 = useRef();
  const Slider4 = useRef();

  const HandleHeight = () => {
    const ControlHeight = Slider.current;
    ControlHeight.style.height = "373px";
    ControlHeight.style.backgroundColor = "#ffa217";
  };

  const HandleHeight2 = () => {
    const ControlHeight = Slider2.current;
    ControlHeight.style.height = "373px";
    ControlHeight.style.backgroundColor = "#ffa217";
  };
  const HandleHeight3 = () => {
    const ControlHeight = Slider3.current;
    ControlHeight.style.height = "373px";
    ControlHeight.style.backgroundColor = "#ffa217";
  };
  const HandleHeight4 = () => {
    const ControlHeight = Slider4.current;
    ControlHeight.style.height = "373px";
    ControlHeight.style.backgroundColor = "#ffa217";
  };

  const HandleHeightOut = () => {
    const ControlHeight = Slider.current;
    ControlHeight.style.height = "335px";
    ControlHeight.style.backgroundColor = "white";
  };

  const HandleHeightOut2 = () => {
    const ControlHeight = Slider2.current;
    ControlHeight.style.height = "335px";
    ControlHeight.style.backgroundColor = "white";
  };

  const HandleHeightOut3 = () => {
    const ControlHeight = Slider3.current;
    ControlHeight.style.height = "335px";
    ControlHeight.style.backgroundColor = "white";
  };

  const HandleHeightOut4 = () => {
    const ControlHeight = Slider4.current;
    ControlHeight.style.height = "335px";
    ControlHeight.style.backgroundColor = "white";
  };
  return (
    <div className="Team">
      <h1 className="teamh1">Team Members</h1>
      <hr className="hr100" />
      <hr className="hr200" />

      <h1 className="masterh1">Our Master Chefs</h1>
      <div className="multy-imgs">
        <div
          className="singleimage1"
          ref={Slider}
          onMouseEnter={HandleHeight}
          onMouseLeave={HandleHeightOut}
        >
          <img src="team-1.jpg" alt="" />
          <h2>Full Name</h2>
          <h4>Description</h4>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-instagram"></i>
        </div>

        <div
          className="singleimage2"
          ref={Slider2}
          onMouseEnter={HandleHeight2}
          onMouseLeave={HandleHeightOut2}
        >
          <img src="team-2.jpg" alt="" />
          <h2>Full Name</h2>
          <h4>Description</h4>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-instagram"></i>
        </div>

        <div
          className="singleimage3"
          ref={Slider3}
          onMouseEnter={HandleHeight3}
          onMouseLeave={HandleHeightOut3}
        >
          <img src="team-3.jpg" alt="" />
          <h2>Full Name</h2>
          <h4>Description</h4>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-instagram"></i>
        </div>

        <div
          className="singleimage4"
          ref={Slider4}
          onMouseEnter={HandleHeight4}
          onMouseLeave={HandleHeightOut4}
        >
          <img src="team-4.jpg" alt="" />
          <h2>Full Name</h2>
          <h4>Description</h4>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-instagram"></i>
        </div>
      </div>
    </div>
  );
}
