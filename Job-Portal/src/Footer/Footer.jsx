import logo from "../assets/Yellow and Black Minimalist Creative Hub Logo .png";
import "./Footer.css";
import play from "../assets/android.jpg";
import apple from "../assets/app-store.jpg";

function Footer() {
  return (
    <div className="Footer">
      <img
        src={logo}
        alt=""
        width={"200px"}
        style={{ marginLeft: "40px", marginTop: "60px" }}
      />
      <p>
        Workly is the heart of the design community and the best resource to
        discover and connect with designers and jobs worldwide.
      </p>
      <div className="icons">
        <i class="bx bxl-facebook-circle"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-linkedin-square"></i>
      </div>
      <div className="recources">
        <h4>Resources</h4>
        <ul className="ul">
          <li className="li">About us</li>
          <li className="li">Our Team</li>
          <li className="li">Products</li>
          <li className="li">Contact</li>
        </ul>
      </div>
      <div className="community">
        <h4>Community</h4>
        <ul className="ul">
          <li className="li">Feature</li>
          <li className="li">Pricing</li>
          <li className="li">Credit</li>
          <li className="li">FAQ</li>
        </ul>
      </div>
      <div className="Quicklinks">
        <h4>Quick links</h4>
        <ul className="ul">
          <li className="li">iOS</li>
          <li className="li">Android</li>
          <li className="li">Microsoft</li>
          <li className="li">Desktop</li>
        </ul>
      </div>

      <div className="More">
        <h4>More</h4>
        <ul className="ul">
          <li className="li">Privacy</li>
          <li className="li">Help</li>
          <li className="li">Terms</li>
          <li className="li">FAQ</li>
        </ul>
      </div>
      <h1 className="Download">Download App</h1>
      <p className="Apps" style={{ width: "15%" }}>
        Download our Apps and get extra 15% Discount on your first Order…!
      </p>

      <div className="images">
        <img src={play} alt="" width={"100px"} />
        <img src={apple} alt="" width={"100px"} />
      </div>
      <hr />
      <p style={{ marginTop: "30px", width: "80%" }}>
        Copyright © 2022. Hicham all right reserved
      </p>
      <p style={{ marginLeft: "700px" }}>Privacy Policy</p>
      <p style={{ marginLeft: "830px" }}>Terms & Conditions</p>
      <p style={{ marginLeft: "1000px" }}>Security</p>
    </div>
  );
}

export default Footer;
