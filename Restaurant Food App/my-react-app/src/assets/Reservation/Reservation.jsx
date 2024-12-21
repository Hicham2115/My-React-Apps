import "./Reservation.css";
import { useState, useRef, useEffect } from "react";

export default function Reservation() {
  const video = useRef();
  const [isVideoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const Video1 = video.current;

      if (isVideoVisible && Video1 && !Video1.contains(event.target)) {
        setVideoVisible(false);
        Video1.style.visibility = "hidden";
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isVideoVisible]);

  const handleVideo = (event) => {
    event.stopPropagation();
    setVideoVisible(true);
    const Video = video.current;
    Video.style.visibility = "visible";
  };

  const handleDefaultBehavior = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Reservation">
      <img src="video.jpg" alt="" />
      <i className="bx bx-play" onClick={handleVideo}></i>
      <div className="video-container">
        <video
          ref={video}
          src="Restaurant Ad Video Template (Editable).mp4"
          className="video"
          controls
        ></video>
      </div>
      <h1 className="h1res">Reservation</h1>
      <h1 className="bookh1">Book A Table Online</h1>
      <form>
        <input type="text" placeholder="Your Name" className="Name" />
        <input type="email" placeholder="Your Email" className="Email" />
        <label className="label">Date And Time</label>
        <input type="datetime-local" className="datetime" />
        {/* <label className="label1">No Of People</label> */}
        <select className="select">
          <option value="People1">People1</option>
          <option value="People2">People2</option>
          <option value="People3">People3</option>
        </select>
        <label className="label2">Special Request</label>
        <textarea className="textarea"></textarea>
        <button onClick={handleDefaultBehavior}>Book Now</button>
      </form>
    </div>
  );
}
