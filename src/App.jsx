  // src/App.jsx
  import React, { useEffect, useState, lazy, Suspense } from "react";
  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

  import Navbar from "./component/Navbar";
  import HeroSlider from "./component/HeroSlider";
  import BookingBar from "./component/BookingBar";
  import About from "./component/About";
  import Service from "./component/Service";
  import RoomCarousel from "./component/RoomCarsoul";
  import Footer from "./component/Footer";
  import Rooms from "./component/Room";
  import NavbarAbout from "./component/NavbarAbout";
  import Contact from "./component/Contact";
  import Loader from "./component/Loader.jsx";
  import { SpeedInsights } from "@vercel/speed-insights/react";
  import AdminPage from "./component/AdminPage";
  import ProtectedRoute from "./component/ProtectedRoute.jsx";
  import Login from "./component/Login";

  import RestaurantPage from "./component/RestaurantPage";
  import BanquetPage from "./component/BanquetPage";
  import PartyLawnPage from "./component/PartyLawnPage";

  const Testimonials = lazy(() => import("./component/Testimoni"));

  /* ---------- Pages ---------- */
  function Homepage() {
    return (
      <div>
        <HeroSlider />
        <BookingBar />
        <About />
        <Service />
        <RoomCarousel />
        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>
        <SpeedInsights />
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

      requestAnimationFrame(end);

      return () => {
        done = true;
      };
    }, [pathname]);

    return loading ? <Loader /> : null;
  }

  /* ---------- Layout Wrapper ---------- */
  function LayoutWithFooter({ children }) {
    const location = useLocation();
    // Hide footer on login & admin
    const hideFooterOn = ["/login", "/admin"];

    return (
      <>
        {children}
        {!hideFooterOn.includes(location.pathname) && <Footer />}
      </>
    );
  }

  /* ---------- App ---------- */
  export default function App() {
    const [booting, setBooting] = useState(true);
    const MIN_SHOW_MS = 1000;

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
        <RouteLoaderLite />
        <Navbar />

        <LayoutWithFooter>
          <Routes>
            {/* Public pages (open) */}
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<NavbarAbout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/banquet" element={<BanquetPage />} />
            <Route path="/party-lawn" element={<PartyLawnPage />} />

            {/* Hidden Admin Login (not linked anywhere) */}
            <Route path="/login" element={<Login />} />

            {/* Admin Dashboard (protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Homepage />} />
          </Routes>
        </LayoutWithFooter>
      </BrowserRouter>
    );
  }
