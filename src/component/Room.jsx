import React from "react";
import "./Room.css";

// Import images (works great with Vite/CRA)
import img1 from "../ASSETS/room.jpg";
import img2 from "../ASSETS/room2.jpg";
import img3 from "../ASSETS/room3.jpg";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Ocean Suite",
      price: null,                     // ✅ add price
      size: "10 ft",
      capacity: "Max person 4",
      bed: "1 King + 1 Sofa",
      services: "Wifi, Mini Bar, Sea View",
      image: img1,
    },
    {
      id: 2,
      title: "Premium King Room",
      price: null,
      size: "12 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom",
      image: img2,
    },
    {
      id: 3,
      title: "Small Room",
      price: null,
      size: "12 ft",
      capacity: "Max person 2",
      bed: "Queen Bed",
      services: "Wifi, Breakfast",
      image: img3,
    },
  ];

  return (
    <section className="rooms-page">
      <h1 className="rooms-title">Our Rooms</h1>

      {/* Row-style list like your screenshot */}
      <div className="rooms-rows">
        {rooms.map((room) => (
          <article key={room.id} className="room-row">
            {/* Left: image */}
            <div className="room-row__img">
              <img src={room.image} alt={room.title} />
            </div>

            {/* Right: white panel */}
            <div className="room-row__panel">
              <h3 className="room-row__title">{room.title}</h3>

              <div className="room-row__price">
                <span className="amount">${room.price}</span>
                <span className="per"> / Day</span>
              </div>

              <ul className="room-row__spec">
                <li><b>Size</b>: {room.size}</li>
                <li><b>Capacity</b>: {room.capacity}</li>
                <li><b>Bed</b>: {room.bed}</li>
                <li><b>Services</b>: {room.services}</li>
              </ul>

              <button className="room-row__btn">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
