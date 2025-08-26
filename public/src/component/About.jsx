import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";

// swap these with your real images in /src/ASSETS
import imgSmall1 from "../ASSETS/LEFT.jpg";
import imgSmall2 from "../ASSETS/LEFTONE.jpg";
import imgTall   from "../ASSETS/RIGHT.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* Left: Text */}
        <div className="about__text">
          <p className="about__eyebrow">ABOUT US</p>
          <h2 className="about__title">
            Welcome To <br />
            <span>Roberto Hotel Luxury</span>
          </h2>
          <div className="typewriter-text">
       <Typewriter
  options={{
    strings: [
      "With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels.",
      "Catering for a perfect stay no matter where your destination."
    ],
    autoStart: true,
    loop: true,
    delay: 40,
  }}
/>
</div>

          <div className="about__meta">
            <p><strong>Manager:</strong> Micheal Jordan</p>
            {/* remove signature as requested */}
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="about__grid">
          <div className="about__gridLeft">
            <img src={imgSmall1} alt="pool terrace" className="about__img about__img--card" />
            <img src={imgSmall2} alt="infinity pool" className="about__img about__img--card" />
          </div>
          <div className="about__gridRight">
            <img src={imgTall} alt="sea kayaking" className="about__img about__img--tall" />
          </div>
        </div>
      </div>
    </section>
  );
}
