import React from "react";
import "./PartyLawn.css";

// Import your lawn images
import lawn1 from "../ASSETS/lawn.jpg";   // hero
import lawn2 from "../ASSETS/lawn0.jpg";  // intro side image
import lawn3 from "../ASSETS/lawn2.jpg";
import lawn4 from "../ASSETS/lawn3.jpg";
import lawn5 from "../ASSETS/lawn4.jpg";
import lawn6 from "../ASSETS/PARTY.jpg";

export default function PartyLawnPage() {
  return (
    <section className="party-lawn">
      {/* Hero */}
      <div className="lawn-hero" style={{ backgroundImage: `url(${lawn1})` }}>
        <div className="lawn-hero-text">
          <h1>Party Lawn</h1>
          <p>Celebrate under open skies with elegance & charm.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="lawn-intro">
        <div className="lawn-text">
          <h2>Celebrate at Bafna Resort</h2>
          <p>
            Our expansive Party Lawn offers a perfect blend of nature and luxury.
            Whether it’s a wedding, corporate event, or private celebration,
            experience unforgettable moments in a stunning outdoor setting.
          </p>
          <ul>
            <li>✨ Scenic mountain views</li>
            <li>🎉 Capacity for 1000+ guests</li>
            <li>🍴 Catering support with Aahaar Pure Veg Restaurant</li>
            <li>💡 Elegant evening lighting</li>
          </ul>
        </div>
        <div className="lawn-image">
          <img src={lawn2} alt="Lawn Building" />
        </div>
      </div>

      {/* Gallery */}
      <div className="lawn-gallery">
        {[lawn3, lawn4, lawn6].map((img, i) => (
          <img key={i} src={img} alt={`Lawn ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
