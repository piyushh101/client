import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import HeroSlider from "./component/HeroSlider";
import BookingBar from "./component/BookingBar";
import About from "./component/About";
import Service from "./component/Service";
import RoomCarousel from "./component/RoomCarsoul";
import Testimonials from "./component/Testimoni";
import Footer from "./component/Footer";
import Rooms from "./component/Room";
import NavbarAbout from "./component/NavbarAbout";
import Contact from "./component/Contact";


function Homepage() {
  return (
    <>
    <div>

       <HeroSlider/>
       <BookingBar/>
       <About/>
       <Service/>
       <RoomCarousel/>
   <Testimonials/>
   
    </div>
</>

  );
}
function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/rooms" element={<Rooms/>} />
        {/* fallback (optional) */}
        <Route path="*" element={<Homepage />} />
        <Route path="/about" element={<NavbarAbout/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


