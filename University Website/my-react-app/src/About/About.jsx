import "./About.css";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      document.body.style.backgroundColor = "#171717";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.backgroundColor = "white";
      document.body.style.overflow = "auto";
    };
  }, [isPlaying]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        videoContainerRef.current &&
        !videoContainerRef.current.contains(event.target)
      ) {
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      document.body.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isPlaying]);

  const handlePlayClick = (event) => {
    event.stopPropagation();
    setIsPlaying(true);
  };

  return (
    <div className="About-Section">
      <div className="first-about">
        {!isPlaying ? (
          <>
            <img src="about.png" alt="About" className="about-pic" />
            <img
              src="play-icon.png"
              alt="Play Icon"
              className="play-icon"
              onClick={handlePlayClick}
            />
          </>
        ) : (
          <div className="video-container" ref={videoContainerRef}>
            <video
              src="GreatStack.mp4"
              controls
              className="video"
              autoPlay
            ></video>
          </div>
        )}
      </div>
      <div className="seconde-about">
        <h3>ABOUT UNIVERSITY</h3>
        <h1 className="h1">Nurturing Tomorrow's Leaders Today</h1>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
}
