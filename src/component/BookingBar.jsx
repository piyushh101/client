import React, { useState } from "react";
import "./BookingBar.css";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState("01");
  const [adults, setAdults] = useState("01");
  const [children, setChildren] = useState("01");
  const [showPopup, setShowPopup] = useState(false);

  // ensure checkout can't be before checkin
  const handleCheckIn = (e) => {
    const v = e.target.value;
    setCheckIn(v);
    if (checkOut && checkOut < v) setCheckOut(v);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setShowPopup(true);
      return;
    }
    setShowPopup(true);
  };

  return (
    <>
      <form className="booking-bar" onSubmit={submit}>
        {/* Check In */}
        <div className="booking-item">
          <label>Check In</label>
          <input
            type="date"
            className="input-box"
            value={checkIn}
            onChange={handleCheckIn}
            placeholder="dd/mm/yyyy"
          />
        </div>

        {/* Check Out */}
        <div className="booking-item">
          <label>Check Out</label>
          <input
            type="date"
            className="input-box"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || undefined}
            placeholder="dd/mm/yyyy"
          />
        </div>

        {/* Room */}
        <div className="booking-item">
          <label>Room</label>
          <select
            className="input-box"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            {["01","02","03","04","05"].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Adult */}
        <div className="booking-item">
          <label>Adult</label>
          <select
            className="input-box"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          >
            {["01","02","03","04","05"].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Children */}
        <div className="booking-item">
          <label>Children</label>
          <select
            className="input-box"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          >
            {["01","02","03","04","05"].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Button */}
        <div className="booking-item booking-action">
          <button className="check-btn" type="submit">Check Availability</button>
        </div>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h2>⚠️ Server Problem</h2>
            <p>
              We are currently facing issues with our booking server.  
              Please call us directly at <strong>+91 994077 26406</strong> to confirm your booking.
            </p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
