import React from "react";
import "./Service.css";

// ✅ put your logo file here
import logo from "../ASSETS/officeLogo.png";

// using react-icons (lighter than Font Awesome CDN)
import { FaCar, FaConciergeBell, FaSpa, FaUtensils, FaCocktail } from "react-icons/fa";

const SERVICES = [
  { icon: <FaCar />,        title: "Transportation" },
  { icon: <FaConciergeBell />, title: "Reiseservice" },
  { icon: <FaSpa />,        title: "Spa Banquet Hall" },
  { icon: <FaUtensils />,   title: "Aahaar Veg Restauren" },
  { icon: <FaCocktail />,   title: "Party Lawn" },
];

export default function Service() {
  return (
    <section className="services">
      <div className="services__inner">
        {/* Header with your logo */}
        <div className="services__head">
        
          <div>
            <p className="services__eyebrow">OUR SERVICES</p>
            <h3 className="services__title">Everything You Need</h3>
          </div>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
