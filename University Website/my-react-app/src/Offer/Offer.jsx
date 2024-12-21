import "./Offer.css";

export default function Offer() {
  return (
    <div>
      <div className="welcome">
        <h4>OUR PROGRAM</h4>
        <h1>What We Offer</h1>
      </div>
      <div className="Cards">
        <div className="overlay1">
          {/* <img src="program-1.png" alt="program-1" /> */}
          <img src="program-icon-1.png" alt="" className="secondepic1" />
          <p className="para">Graduation Degree</p>
        </div>
        <div className="overlay2">
          {/* <img src="program-2.png" alt="program-2" /> */}
          <img src="program-icon-2.png" alt="" className="secondepic2" />
          <p className="para">Masters Degree</p>
        </div>
        <div className="overlay3">
          {/* <img src="program-3.png" alt="program-3" /> */}
          <img src="program-icon-3.png" alt="" className="secondepic3" />
          <p className="para">Post Graduation</p>
        </div>
      </div>
    </div>
  );
}
