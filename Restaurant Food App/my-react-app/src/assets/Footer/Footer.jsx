import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="h2s">
        <h2>Company</h2>
        <h2>Contact</h2>
        <h2>Opening</h2>
        <h2>Newsletter</h2>
      </div>
      <div className="hrs">
        <hr className="hr100" />
        <hr className="hr200" />
        <hr className="hr300" />
        <hr className="hr400" />
      </div>
      <div className="lis">
        <ul>
          <li>
            <span>▸</span>About Us
          </li>
          <li>
            <span>▸</span>Contact Us
          </li>
          <li>
            <span>▸</span>Reservation
          </li>
          <li>
            <span>▸</span>Privacy Policy
          </li>
          <li>
            <span>▸</span>Terms Of Condition
          </li>
        </ul>
        <div className="is">
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-facebook-circle"></i>
          <i class="bx bxl-youtube"></i>
          <i class="bx bxl-linkedin"></i>
        </div>
      </div>
      <div className="adress">
        <h2>
          <span>
            <i class="bx bx-current-location"></i>
          </span>
          123 Street, New York, USA
        </h2>
        <h2>
          <span>
            <i class="bx bxs-phone"></i>
          </span>
          +012 345 67890
        </h2>
        <h2>
          <span>
            <i class="bx bxs-envelope"></i>
          </span>
          info@example.com
        </h2>
      </div>
      <div className="opening">
        <h2>Monday - Saturday</h2>
        <h2>09AM - 09PM</h2>
        <h2>Sunday</h2>
        <h2>10AM - 08PM</h2>
      </div>

      <div className="newsletter">
        <p> Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <input type="email" placeholder="Your Email" />
        <button>SIGN UP</button>
      </div>
      <p className="lastpara">
        © Restoran, All Right Reserved. Designed By Hicham Kamani
      </p>
      <p className="lastpara2">Distributed By Hicham's Creation</p>

      <div className="lastul">
        <ul>
          <li>Home</li>
          <li>Cookies</li>
          <li>Help</li>
          <li>FQA</li>
        </ul>
      </div>
    </div>
  );
}
