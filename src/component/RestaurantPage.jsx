import React from "react";
import "./Aahar.css";

// Import photos
import interior1 from "../ASSETS/FOOD1.jpg";
import interior2 from "../ASSETS/FOOD2.jpg";
import interior3 from "../ASSETS/FOOD3.jpg";
import veg1 from "../ASSETS/VEG.jpg";
import veg2 from "../ASSETS/VEG1.jpg";
import veg3 from "../ASSETS/VEG2.jpg";

export default function AahaarPage() {
  return (
    <section className="aahaar">
      {/* Hero */}
      <div
        className="aahaar-hero"
        style={{ backgroundImage: `url(${interior1})` }}
      >
        <div className="overlay">
          <h1>Aahaar Pure Veg Restaurant</h1>
          <p>Authentic vegetarian cuisine in a warm & elegant setting</p>
        </div>
      </div>

      {/* Intro */}
      <div className="aahaar-content">
        <h2>Experience Pure Veg Dining</h2>
        <p>
          Aahaar Pure Veg Restaurant offers a delightful dining experience with
          a wide variety of authentic vegetarian dishes. Enjoy flavorsome meals
          crafted from the freshest ingredients in a modern, cozy, and
          family-friendly atmosphere.
        </p>
        <ul>
          <li>🍛 Wide range of vegetarian delicacies</li>
          <li>👨‍👩‍👧 Perfect for families & group dining</li>
          <li>✨ Elegant interiors with scenic views</li>
          <li>🥗 Fresh ingredients, authentic taste</li>
        </ul>
      </div>

      {/* Interiors */}
      <div className="aahaar-subsection">
        <h2>Our Ambience</h2>
        <div className="aahaar-gallery">
          {[interior2, interior3].map((img, i) => (
            <img key={i} src={img} alt={`Interior ${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Food */}
      <div className="aahaar-subsection">
        <h2>Food Highlights</h2>
        <div className="aahaar-gallery food-gallery">
          {[veg1, veg2  ].map((img, i) => (
            <img key={i} src={img} alt={`Dish ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
