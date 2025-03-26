import "./Hero.css";
import samsung from "../assets/samsung.png";
import dell from "../assets/dell.png";
import sony from "../assets/sony.png";
import asus from "../assets/asus.png";
import nokia from "../assets/nokia.png";
import vivo from "../assets/vivo.png";
import casio from "../assets/casio.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="overlay">
        <h1>
          The #1 <span style={{ color: "#84ff82" }}>Job Board for</span>
        </h1>
        <h1 className="Hiring">Hiring or Find Your Next Job</h1>
        <p>
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>

        <h6 className="Popular">
          Popular Searches:{" "}
          <span>
            <a href="">Designer,</a>
            <a href="">Web,</a>
            <a href="">IOS,</a>
            <a href="">Developer,</a>
            <a href="">PHP,</a>
            <a href="">Senior,</a>
            <a href="">Engineer,</a>
          </span>
        </h6>
        <div className="h3s">
          <h2>265 K+</h2>
          <h2>17 K+</h2>
          <h2>15 K+</h2>
          <h2>28 K+</h2>
        </div>
        <div className="subh3">
          <h6>Daily Jobs Posted</h6>
          <h6>Recruiters</h6>
          <h6>Freelancers</h6>
          <h6>Blog Tips</h6>
        </div>
        <div className="imgs">
          <img src={samsung} alt="" width={"100px"} />
          <img src={dell} alt="" width={"100px"} />
          <img src={vivo} alt="" width={"100px"} />
          <img src={asus} alt="" width={"100px"} />
          <img src={nokia} alt="" width={"100px"} />
          <img src={casio} alt="" width={"100px"} />
          <img src={sony} alt="" width={"100px"} />
        </div>
      </div>
      <hr style={{ marginTop: "130px" }} />
    </div>
  );
}

export default Hero;
