import React, { useEffect, useRef, useState } from "react";
import "./RoomCarsoul.css";

// ⬇️ swap with your real images in /src/ASSETS
import room1 from "../ASSETS/Room.jpg";
import room2 from "../ASSETS/room2.jpg";
import room3 from "../ASSETS/room3.jpg";

const SLIDES = [
  {
    image: room1,
    title: "Premium King Room",
    price: 400,
    size: "30 ft",
    capacity: "Max person 5",
    bed: "King Beds",
    services: "Wifi, Television, Bathroom",
  },
  {
    image: room2,
    title: "Deluxe Ocean Suite",
    price: 560,
    size: "45 ft",
    capacity: "Max person 4",
    bed: "1 King + 1 Sofa",
    services: "Wifi, Mini Bar, Sea View",
  },
  {
    image: room3,
    title: "Family Garden Room",
    price: 320,
    size: "35 ft",
    capacity: "Max person 6",
    bed: "2 Queen Beds",
    services: "Wifi, TV, Garden Access",
  },
];

export default function RoomCarousel({
  interval = 4500, // ms
  pauseOnHover = true,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  // autoplay
  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line
  }, [index, interval]);

  const start = () => {
    stop();
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, interval);
  };
  const stop = () => timerRef.current && clearTimeout(timerRef.current);

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const goTo = (i) => setIndex(i);

  // swipe (mobile)
  const startX = useRef(0);
  const deltaX = useRef(0);
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    stop();
  };
  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 50) {
      deltaX.current < 0 ? next() : prev();
    }
    start();
  };

  return (
    <section
      className="rooms"
      onMouseEnter={pauseOnHover ? stop : undefined}
      onMouseLeave={pauseOnHover ? start : undefined}
    >
      {/* Slider viewport */}
      <div
        className="rooms__viewport"
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Track translates for smooth slide */}
        <div
          className="rooms__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <article className="rooms__slide" key={i}>
              {/* Left: Image */}
              <div className="rooms__photo">
                <img src={s.image} alt={s.title} />
              </div>

              {/* Right: Panel */}
              <div className="rooms__panel">
                <h2 className="rooms__title">{s.title}</h2>

                <div className="rooms__price">
                  <span className="amount">${s.price}</span>
                  <span className="per">/ Day</span>
                </div>

                <ul className="rooms__spec">
                  <li>✔ <b>Size</b> : {s.size}</li>
                  <li>✔ <b>Capacity</b> : {s.capacity}</li>
                  <li>✔ <b>Bed</b> : {s.bed}</li>
                  <li>✔ <b>Services</b> : {s.services}</li>
                </ul>

                <button className="rooms__cta">View Details</button>
              </div>
            </article>
          ))}
        </div>

        {/* Arrows */}
        <button className="rooms__arrow left" onClick={prev} aria-label="Previous">‹</button>
        <button className="rooms__arrow right" onClick={next} aria-label="Next">›</button>
      </div>

      {/* Dots */}
      <div className="rooms__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
