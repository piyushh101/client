import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../ASSETS/officeLogo.png";

function Header() {
  const [dateTime, setDateTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="top-info">
        <span className="number">📞 +91 98765 43210</span>
        <span>📅 {formattedDate} | ⏰ {formattedTime}</span>
        <span>📍 Kolkata, India</span>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Bafna Resort" />
        </div>

        <button className="menu-icon" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>

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
  <li><a href="#pages" onClick={closeMenu}>Pages</a></li>
  <li><a href="#news" onClick={closeMenu}>News</a></li>


  <li>
    <Link className="book-btn" to="/rooms" onClick={closeMenu}>
      Book Now
    </Link>
  </li>
</ul>
      </nav>
    </header>
  );
}

export default Header;
