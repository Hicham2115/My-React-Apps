import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about">
      <div className="pics">
        <img src="about-1.jpg" alt="" className="about-1" />
        <img src="about-2.jpg" alt="" className="about-2" />
        <img src="about-3.jpg" alt="" className="about-3 " />
        <img src="about-4.jpg" alt="" className="about-4" />
      </div>
      <h1 className="uniqueh1">about Us</h1> <hr />
      <h1 className="welcome-mssg">
        Welcome to
        <span className="img-fork">
          <img src="Logo.png" alt="" />
        </span>
        Restoran
      </h1>
      <p>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
      </p>
      <p>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <div className="exp">
        <div className="row1"></div>
        <h1 className="fifteen" >15</h1>
        <h2 className="years"><span className="span-year">Years of</span> Experience</h2>
        <div className="row2"></div>
        <h1 className="fifty">50</h1>
        <h2 className="popular"><span className="span-popular">Popular</span> Master Chefs</h2>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
