import React from "react";
import "./BanquetPage.css";

import hall1 from "../ASSETS/HALL.jpg";
import hall2 from "../ASSETS/HALL1.jpg";
import hall3 from "../ASSETS/HALL2.jpg";

export default function BanquetPage() {
  return (
    <section className="banquet">
      {/* Hero Banner */}
      <div className="banquet-hero" style={{ backgroundImage: `url(${hall1})` }}>
        <div className="overlay">
          <h1>Banquet Hall</h1>
          <p>Celebrate in style with elegance & sophistication</p>
        </div>
      </div>

      {/* Content */}
      <div className="banquet-content">
        <h2>Grand Celebrations at Bafna Resort</h2>
        <p>
          Our Banquet Hall is designed to host your most cherished events —
          from weddings and receptions to conferences and corporate gatherings.
          With elegant interiors, premium facilities, and warm hospitality,
          every occasion becomes unforgettable.
        </p>
        <ul>
          <li>✨ Spacious hall with luxurious décor</li>
          <li>🎉 Perfect for weddings, parties & corporate events</li>
          <li>🎤 Modern audio-visual setup for events</li>
          <li>🥗 Catering services by Aahaar Pure Veg Restaurant</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="banquet-gallery">
        {[hall1, hall2, hall3].map((img, i) => (
          <img key={i} src={img} alt={`Banquet ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
