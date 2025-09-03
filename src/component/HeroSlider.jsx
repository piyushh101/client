import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroSlider.css";

// Import your images
import slide1 from "../ASSETS/HOME1.jpg";
import slide2 from "../ASSETS/HOME2.jpg";
import slide3 from "../ASSETS/HOME3.jpg";

function HeroSlider() {
  return (
    <Carousel fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption className="hero-caption">
          <h2 className="caption-title">Welcome To Bafna Resort</h2>
          <p className="caption-sub">Luxury & Comfort Redefined</p>
          <button className="discover-btn">Discover Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption className="hero-caption">
          <h2 className="caption-title">Relax & Enjoy</h2>
          <p className="caption-sub">Your Perfect Getaway Awaits</p>
          <button className="discover-btn">Book Today</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption className="hero-caption">
          <h2 className="caption-title">Unforgettable Experience</h2>
          <p className="caption-sub">Make Every Moment Special</p>
          <button className="discover-btn">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
