import "./Cards.css";
import {useRef } from "react";
export default function Cards() {
  const indexRef = useRef();
  let tx = 0;

  function HandleSliderLeft() {
    if (tx < 0) {
      tx += 51;
      indexRef.current.style.transform = `translateX(${tx}%)`;
    }
  }

  function HandleSliderRight() {
    if (tx > -100) {
      tx -= 51;
    }
    indexRef.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <>
      <div className="Cards-Slider">
        <img
          src="back-icon.png "
          alt=""
          className="back-icon"
          onClick={HandleSliderLeft}
        />
        <ul ref={indexRef}>
          <li>
            <img src="user-1.png" alt="" />
            <h3>Emily Williams</h3>
            <h4>Edusity, USA</h4>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>

          <li>
            <img src="user-2.png" alt="" />
            <h3>William Jackson</h3>
            <h4>Edusity, USA</h4>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li>
            <img src="user-3.png" alt="" />
            <h3>William Jackson</h3>
            <h4>Edusity, USA</h4>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li>
            <img src="user-4.png" alt="" />
            <h3>William Jackson</h3>
            <h4>Edusity, USA</h4>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
        </ul>
        <img
          src="next-icon.png "
          alt=""
          className="next-icon"
          onClick={HandleSliderRight}
        />
      </div>
    </>
  );
}
