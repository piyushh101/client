import React from "react";
import "./NavbarAbout.css";

import img1 from "../ASSETS/HELLO1.jpg";
import img2 from "../ASSETS/HELLO2.jpg";
import img3 from "../ASSETS/HELLO3.jpg";
import img4 from "../ASSETS/HELLO4.jpg";

export default function About() {
  return (
    <section className="about-page">
      <h1 className="about-title">About Us</h1>

      <div className="about-grid">
        {/* LEFT TEXT */}
        <div className="about-text">
          <h2>Bafna Resort</h2>
          <p>
            Welcome to <b>Bafna Resort</b>, a perfect blend of luxury and comfort in
            the heart of Jagdalpur. With <b>45 well-appointed rooms</b> including 
            Deluxe, Superior, and Executive categories, our resort is designed to 
            cater to leisure travelers, families, and business guests alike.  
          </p>

          <p>
            Our property features the <b>Aahaar Pure Veg Restaurant</b> serving 
            authentic vegetarian delicacies, a <b>Banquet Hall</b> for weddings and 
            corporate events, and a spacious <b>Party Lawn</b> to host unforgettable 
            gatherings. Every detail is thoughtfully crafted to ensure your stay is 
            truly memorable.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>🛏️ 45 Modern Rooms (Deluxe, Superior & Executive)</li>
            <li>🍴 Aahaar Pure Veg Restaurant</li>
            <li>🎉 Banquet Hall for events & conferences</li>
            <li>🌿 Party Lawn for celebrations</li>
            <li>📍 Located near major landmarks in Jagdalpur</li>
          </ul>

          {/* <h3>Nearby Attractions</h3> */}
          {/* <ul>
            <li>Chitrakoot Waterfall – 35 km</li>
            <li>Tirathgarh Waterfall – 40 km</li>
            <li>Shri Balaji Temple – 500 m</li>
            <li>Jagdalpur Main Market – close by</li>
            <li>Bus Stand – 3 km | Airport – 3.5 km</li>
          </ul> */}

          <p>
            At Bafna Resort, we redefine hospitality with spacious rooms, elegant 
            interiors, warm service, and modern amenities. Whether you are here 
            to relax, explore, or celebrate, our team is dedicated to making your 
            stay exceptional.  
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-images">
          <img src={img1} alt="Hotel Room" />
          <img src={img2} alt="Luxury Stay" />
          <img src={img3} alt="Banquet Hall" />
          <img src={img4} alt="Restaurant" />
        </div>
      </div>
    </section>
  );
}
