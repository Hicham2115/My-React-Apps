import "./App.css";
import { Route, Routes } from "react-router-dom";
import RedirectAbout from "./assets/RedirectAbout";
import Header from "./assets/Header/Header";
import Services from "./assets/Services/Services";
import AboutUs from "./assets/AboutUs/AboutUs";
import Menu from "./assets/Menu/Menu";
import Reservation from "./assets/Reservation/Reservation";
import Team from "./assets/Team/Team";
import Testimonial from "./assets/Testimonial/Testimonial";
import Footer from "./assets/Footer/Footer";
import Redirectservices from "./Redirectservices";
import RedirectMenu from "./RedirectMenu";
import RedirectContact from "./RedirectContact";
import RedirectBooking from "./RedirectBooking";
import RedirectourTeam from "./RedirectourTeam";
import RedirectTestimonial from "./RedirectTestimonial";
import Beef from "./Beef";
import Chicken from "./Chicken";
import Dessert from "./Dessert";
import Lamb from "./Lamb";
import Miscellaneous from "./Miscellaneous";
import Pasta from "./Pasta";
import Pork from "./Pork";
import Seafood from "./Seafood";
import Side from "./Side";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Services />
            <AboutUs />
            <Menu />
            <Reservation />
            <Team />
            <Testimonial />
            <Footer />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Header />
            <Services />
            <AboutUs />
            <Menu />
            <Reservation />
            <Team />
            <Testimonial />
            <Footer />
          </>
        }
      />
      <Route path="/about" element={<RedirectAbout />} />
      <Route path="/service" element={<Redirectservices />} />
      <Route path="/menu" element={<RedirectMenu />} />
      <Route path="/contact" element={<RedirectContact />} />
      <Route path="/booking" element={<RedirectBooking />} />
      <Route path="/ourteam" element={<RedirectourTeam />} />
      <Route path="/testimonial" element={<RedirectTestimonial />} />
      <Route path="/beef" element={<Beef />} />
      <Route path="/chicken" element={<Chicken />} />
      <Route path="/dessert" element={<Dessert />} />
      <Route path="/lamb" element={<Lamb />} />
      <Route path="/miscellaneous" element={<Miscellaneous />} />
      <Route path="/pasta" element={<Pasta />} />
      <Route path="/pork" element={<Pork />} />
      <Route path="/seafood" element={<Seafood />} />
      <Route path="/side" element={<Side />} />
    </Routes>
  );
}

export default App;
