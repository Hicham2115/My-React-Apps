import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="Testimonial">
      <h1 className="testh1">Testimonial</h1>
      <hr className="hrox1" />
      <hr className="hrox2" />
      <h1 className="CLIENTH1">Our Clients Say!!!</h1>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide style={{ paddingLeft: " 30px" }}>
          <span style={{ fontSize: "80px" }}>
            <i class="bx bxs-quote-alt-right" style={{ color: "black" }}></i>
          </span>
          <p style={{ marginTop: "-10px", width: "500px", color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore, magni quia eaque atque sequi.
          </p>
          <img
            src="testimonial-2.jpg"
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          />
          <h2
            style={{ marginTop: "-40px", marginLeft: "60px", color: "black" }}
          >
            Client Name
          </h2>
          <h4
            style={{ marginTop: "-10px", marginLeft: "60px", color: "black" }}
          >
            Profeesion
          </h4>
        </SwiperSlide>

        <SwiperSlide>
          <span style={{ fontSize: "80px" }}>
            <i class="bx bxs-quote-alt-right" style={{ color: "black" }}></i>
          </span>
          <p style={{ marginTop: "-10px", width: "500px", color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore, magni quia eaque atque sequi.
          </p>
          <img
            src="testimonial-3.jpg"
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          />
          <h2
            style={{ marginTop: "-40px", marginLeft: "60px", color: "black" }}
          >
            Client Name
          </h2>
          <h4
            style={{ marginTop: "-10px", marginLeft: "60px", color: "black" }}
          >
            Profeesion
          </h4>
        </SwiperSlide>

        <SwiperSlide>
          <span style={{ fontSize: "80px" }}>
            <i class="bx bxs-quote-alt-right" style={{ color: "black" }}></i>
          </span>
          <p style={{ marginTop: "-10px", width: "500px", color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore, magni quia eaque atque sequi.
          </p>
          <img
            src="testimonial-4.jpg"
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          />
          <h2
            style={{ marginTop: "-40px", marginLeft: "60px", color: "black" }}
          >
            Client Name
          </h2>
          <h4
            style={{ marginTop: "-10px", marginLeft: "60px", color: "black" }}
          >
            Profeesion
          </h4>
        </SwiperSlide>

        <SwiperSlide>
          <span style={{ fontSize: "80px" }}>
            <i class="bx bxs-quote-alt-right" style={{ color: "black" }}></i>
          </span>
          <p style={{ marginTop: "-10px", width: "500px", color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore, magni quia eaque atque sequi.
          </p>
          <img
            src="testimonial-1.jpg"
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          />
          <h2
            style={{ marginTop: "-40px", marginLeft: "60px", color: "black" }}
          >
            Client Name
          </h2>
          <h4
            style={{ marginTop: "-10px", marginLeft: "60px", color: "black" }}
          >
            Profeesion
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
