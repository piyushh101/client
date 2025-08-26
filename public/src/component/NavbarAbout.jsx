import React from "react";
import "./NavbarAbout.css";

import img1 from "../ASSETS/Room.jpg";
import img2 from "../ASSETS/room2.jpg";
import img3 from "../ASSETS/room3.jpg";
import img4 from "../ASSETS/hero3.jpg";

export default function About() {
  return (
    <section className="about-page">
      <h1 className="about-title">About Us</h1>

      <div className="about-grid">
        {/* LEFT TEXT */}
        <div className="about-text">
          <h2>Our Hotel</h2>
          <p>
            Nestled in the heart of Jagdalpur, Chhattisgarh, Bafna Resort is a
            preferred choice for both leisure and business travellers seeking
            comfort, convenience, and connectivity. With its prime central
            location, the resort offers effortless access to major transport hubs
            and renowned tourist attractions across the city.
          </p>

          <h3>Popular landmarks near the hotel include:</h3>
          <ul>
            <li>Chitrakoot Waterfall – 35 km</li>
            <li>Tirathgarh Waterfall – 40 km</li>
            <li>Shri Balaji Temple – just 500 meters away</li>
            <li>Jagdalpur Main Market – nearby for local shopping</li>
            <li>Bus Stand – 3 km</li>
            <li>Jagdalpur Airport – 3.5 km</li>
          </ul>

          <h3>Your Stay at Bafna Resort</h3>
          <p>
            Every room and suite is designed to offer a relaxing and elegant
            stay. Experience the calming charm of soothing color palettes,
            contemporary furnishings, and thoughtfully curated five-star
            amenities — all aimed at creating a serene sanctuary for our guests.
          </p>

          <p>
            Unwind on plush bedding while watching TV or streaming your favorite
            music with our complimentary high-speed Wi-Fi. Enjoy delicious meals
            anytime with our 24-hour in-room dining service.
          </p>

          <p>
            For an elevated stay, choose one of our premium suites that offer
            extra space and indulgent features for added comfort.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-images">
          <img src={img1} alt="Hotel Entrance" />
          <img src={img2} alt="Hotel Building" />
          <img src={img3} alt="Banquet Hall" />
          <img src={img4} alt="Restaurant" />
        </div>
      </div>
    </section>
  );
}
