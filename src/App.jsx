// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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
import { SpeedInsights } from "@vercel/speed-insights/react"

import Loader from "./component/Loader"; // make sure Loader.jsx + Loader.css exist in src/component

/* ---------- Pages ---------- */
function Homepage() {
  return (
    <div>
      <HeroSlider />
      <BookingBar />
      <About />
      <Service />
      <RoomCarousel />
      <Testimonials />
      <SpeedInsights/>
    </div>
  );
}

/* ---------- Utilities ---------- */
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
}

/* Route-change loader (shows briefly on each navigation) */
function RouteLoaderLite() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const MIN_ROUTE_MS = 600;

  useEffect(() => {
    let done = false;
    const started = Date.now();
    setLoading(true);

    const end = () => {
      if (done) return;
      const elapsed = Date.now() - started;
      const wait = Math.max(0, MIN_ROUTE_MS - elapsed);
      setTimeout(() => setLoading(false), wait);
      done = true;
    };

    // let the next route paint, then end (but keep minimum duration)
    requestAnimationFrame(end);

    return () => {
      done = true;
    };
  }, [pathname]);

  return loading ? <Loader /> : null;
}

/* ---------- App ---------- */
export default function App() {
  // First-load splash
  const [booting, setBooting] = useState(true);
  const MIN_SHOW_MS = 1000; // show loader at least this long

  useEffect(() => {
    let finished = false;
    const startedAt = Date.now();

    const finish = () => {
      if (finished) return;
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, MIN_SHOW_MS - elapsed);
      setTimeout(() => setBooting(false), wait);
      finished = true;
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    // absolute safety: hide after 5s no matter what
    const safety = setTimeout(finish, 5000);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  if (booting) return <Loader />;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteLoaderLite />  {/* loader on every route change */}
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<NavbarAbout />} />
        <Route path="/contact" element={<Contact />} />
        {/* fallback */}
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
