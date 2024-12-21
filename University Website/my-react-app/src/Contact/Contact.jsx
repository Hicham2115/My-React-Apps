import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
export default function Contact() {
  const handleCaptcha = (token) => {
    console.log("reCAPTCHA token:", token);
    // Send this token to your server for validation if needed
  };
  return (
    <>
      <div className="Contact">
        <h3>Contact Us</h3>
        <h1>Get in Touch</h1>
      </div>
      <div className="Contact-info">
        <h2>Send us a message</h2>
        <img src="msg-icon.png" alt="" className="msg-icon" />
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <img src="mail-icon.png" alt="" className="mail-icon" />
        <p className="para1">Contact@GreatStack.dev</p>
        <img src="phone-icon.png" alt="" className="phone-icon" />
        <p className="para2">+1 123-456-7890</p>
        <img src="location-icon.png" alt="" className="location-icon" />
        <p className="para3">
          {" "}
          77 Massachusetts Ave, Cambridge MA 02139, United States
        </p>
      </div>
      <div className="Form">
        <form>
          <label>Your name</label>
          <input type="text" placeholder="Enter Your Name" />
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter Your Name" />
          <label>Your Email</label>
          <input type="tel" placeholder="Enter Your Email id" />
          <label>Write your messages here</label>
          <textarea
            type="text"
            placeholder="Enter Your Message"
            className="last"
          />
        </form>
        <ReCAPTCHA
          className="Captcha"
          sitekey="6LdZEIgqAAAAAB4cByhVCm5PKv8oe3gKEXbsjS8Q"
          onChange={handleCaptcha}
        />
        <button className="submit-btn">Submit now &#8594;</button>
        <hr className="hr" />
        <span style={{ marginLeft: "130px" }}>
          © 2024 Edusity. All rights reserved.
        </span>
        <a
          style={{
            marginLeft: "470px",
            color: "black",
            textDecoration: "none",
            paddingBottom: "50px",
          }}
          href="#"
        >
          Terms of Services
        </a>
        <a
          style={{
            marginLeft: "50px",
            color: "black",
            textDecoration: "none",
          }}
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </>
  );
}
