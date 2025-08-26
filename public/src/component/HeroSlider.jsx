import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroSlider.css";  

// Import your images (from ASSETS folder)
import slide1 from "../ASSETS/hero1.jpg";
import slide2 from "../ASSETS/hero2.jpg";
import slide3 from "../ASSETS/hero3.jpg";

function HeroSlider() {
  return (
    <Carousel fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h2>Welcome To Bafna Resort</h2>
          <p>Luxury & Comfort Redefined</p>
          <button className="btn btn-warning">Discover Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h2>Relax & Enjoy</h2>
          <p>Your Perfect Getaway Awaits</p>
          <button className="btn btn-warning">Book Today</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h2>Unforgettable Experience</h2>
          <p>Make Every Moment Special</p>
          <button className="btn btn-warning">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
