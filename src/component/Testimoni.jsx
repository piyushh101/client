import React, { useEffect, useRef, useState } from "react";
import "./Testmoni.css";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ⬇️ swap with your real images in /src/ASSETS
import t1 from "../ASSETS/test1.jpg";
import t2 from "../ASSETS/test2.jpg";
import t3 from "../ASSETS/test3.jpg";

const ITEMS = [
  {
    img: t1,
    title: "Exceptional Service",
    text:
      "“I stayed in the Superior Room and loved the comfort. The peaceful environment and courteous staff made my vacation truly relaxing. I’ll definitely visit again”",
    name: "Michael Kim",
    role: "Entrepreneur",
    rating: 5,
  },
  {
    img: t2,
    title: "Our Guests Love Us",
    text:
      "“Our family had a wonderful time at Bafna Resort. The rooms were spotless, spacious, and offered beautiful views. The staff went above and beyond to make us feel at home”",
    name: "Akash Downey",
    role: "Event Organizer",
    rating: 5,
  },
  {
    img: t3,
    title: "A Perfect Stay",
    text:
      "“From check-in to check-out, everything was seamless. The banquet hall was perfect for our family function, and the food at Aahaar Pure Veg Restaurant was simply delicious”",
    name: "Ritika Sharma",
    role: "Travel Blogger",
    rating: 4,
  },
];

export default function Testimonials({ interval = 5000 }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line
  }, [idx, interval]);

  const start = () => {
    stop();
    timer.current = setTimeout(
      () => setIdx((i) => (i + 1) % ITEMS.length),
      interval
    );
  };
  const stop = () => timer.current && clearTimeout(timer.current);

  const prev = () => setIdx((i) => (i - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setIdx((i) => (i + 1) % ITEMS.length);

  return (
    <section className="testi" onMouseEnter={stop} onMouseLeave={start}>
      <div className="testi__inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className="testi__wrapper"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Left image */}
            <div className="testi__photo">
              <img src={ITEMS[idx].img} alt={ITEMS[idx].name} />
            </div>

            {/* Right content */}
            <div className="testi__content">
              <p className="testi__eyebrow">TESTIMONIALS</p>
              <h2 className="testi__title">{ITEMS[idx].title}</h2>
              <p className="testi__text">{ITEMS[idx].text}</p>

              <div className="testi__rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < ITEMS[idx].rating ? "star filled" : "star"}
                  />
                ))}
              </div>

              <p className="testi__author">
                <strong>{ITEMS[idx].name}</strong> – <span>{ITEMS[idx].role}</span>
              </p>

              {/* Dots */}
              <div className="testi__dots">
                {ITEMS.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === idx ? "active" : ""}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows (desktop) */}
              <div className="testi__arrows">
                <button onClick={prev} aria-label="Previous">‹</button>
                <button onClick={next} aria-label="Next">›</button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
