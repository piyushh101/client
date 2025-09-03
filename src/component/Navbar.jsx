// src/component/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import "./Navbar.css";
import logo from "../ASSETS/officeLogo.png";

function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // ✅ useNavigate hook

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      {/* Top Info Bar */}
      <div className="topbar">
        <span>📞 +91 94077 26406</span>
        <span>
          📅 {formattedDate} | ⏰ {formattedTime}
        </span>
        <span>📍 Bafna Resort, Kanker</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Bafna Resort" />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="menu-icon"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Links */}
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/rooms" onClick={closeMenu}>
              Rooms
            </NavLink>
          </li>

          {/* Dropdown */}
          <li
            className={`dropdown ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
          >
            <button className="dropbtn">Facilities</button>
            <div className="dropdown-content">
              <NavLink to="/restaurant" onClick={closeMenu}>
                Aahaar Pure Veg Restaurant
              </NavLink>
              <NavLink to="/banquet" onClick={closeMenu}>
                Banquet Hall
              </NavLink>
              <NavLink to="/party-lawn" onClick={closeMenu}>
                Party Lawn
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          {/* 🔐 Login Button (replaces Book Now) */}
          <li className="book-now-li">
            <button
              className="book-btn"
              onClick={() => {
                closeMenu();
                navigate("/login");
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
