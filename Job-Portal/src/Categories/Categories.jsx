import "./Categories.css";
import one from "../assets/surface-XdWkFaHI97c-unsplash.jpg";
import two from "../assets/toa-heftiba-4xe-yVFJCvw-unsplash.jpg";
import third from "../assets/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg";
import fourth from "../assets/kelly-sikkema-K5dAn1gOFEc-unsplash.jpg";
import fifth from "../assets/hunters-race-MYbhN8KaaEc-unsplash.jpg";
import sixth from "../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Categories() {
  return (
    <div className="Categories">
      <h1>Popular category</h1>
      <h3>Search and connect with the right candidates faster.</h3>
      <div class="card" id="cardox2">
        <img
          src={one}
          class="card-img-top"
          style={{
            width: "200px",
            height: "300px",
            borderRadius: "10px",
          }}
        />
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              color: "white",
              marginTop: "-100px",
              fontWeight: "bold",
            }}
          >
            Software
          </h5>
          <p class="card-text" style={{ color: "white", fontWeight: "bold" }}>
            35 Jobs Available
          </p>
        </div>
      </div>

      <div
        class="card"
        id="cardox2"
        style={{
          marginLeft: "240px",
          marginTop: "-300px",
        }}
      >
        <img
          src={two}
          class="card-img-top"
          style={{ width: "200px", height: "300px", borderRadius: "10px" }}
        />
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              color: "white",
              marginTop: "-100px",
              fontWeight: "bold",
            }}
          >
            Finance
          </h5>
          <p class="card-text" style={{ color: "white", fontWeight: "bold" }}>
            50 Jobs Available
          </p>
        </div>
      </div>

      <div
        class="card"
        id="cardox2"
        style={{
          marginLeft: "480px",
          marginTop: "-300px",
        }}
      >
        <img
          src={third}
          class="card-img-top"
          style={{ width: "200px", height: "300px", borderRadius: "10px" }}
        />
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              color: "white",
              marginTop: "-100px",
              fontWeight: "bold",
            }}
          >
            Finance
          </h5>
          <p class="card-text" style={{ color: "white", fontWeight: "bold" }}>
            50 Jobs Available
          </p>
        </div>
      </div>

      <div
        class="card"
        id="cardox2"
        style={{
          marginLeft: "720px",
          marginTop: "-300px",
        }}
      >
        <img
          src={fourth}
          class="card-img-top"
          style={{ width: "200px", height: "300px", borderRadius: "10px" }}
        />
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              color: "white",
              marginTop: "-100px",
              fontWeight: "bold",
            }}
          >
            Finance
          </h5>
          <p class="card-text" style={{ color: "white", fontWeight: "bold" }}>
            50 Jobs Available
          </p>
        </div>
      </div>

      <div
        class="card"
        id="cardox2"
        style={{
          marginLeft: "960px",
          marginTop: "-300px",
        }}
      >
        <img
          src={sixth}
          class="card-img-top"
          style={{ width: "200px", height: "300px", borderRadius: "10px" }}
        />
        <div class="card-body">
          <h5
            class="card-title"
            style={{
              color: "white",
              marginTop: "-100px",
              fontWeight: "bold",
            }}
          >
            Finance
          </h5>
          <p class="card-text" style={{ color: "white", fontWeight: "bold" }}>
            50 Jobs Available
          </p>
        </div>
      </div>

      <div className="nums">
        <h1>+25 K</h1>
        <h1>+17 </h1>
        <h1>+86 </h1>
        <h1>+28 </h1>
      </div>
      <div className="h1s">
        <h1>Completed Cases</h1>
        <h1>Our Office</h1>
        <h1>Skilled People</h1>
        <h1>CHappy Clients</h1>
      </div>

      <div className="paras">
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
      </div>
    </div>
  );
}

export default Categories;
