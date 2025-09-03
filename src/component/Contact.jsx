import React, { useState } from "react";
import "./Contact.css"; // Import CSS

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (data.success) {
        setStatus("✅ Thanks! Your message has been sent.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("⚠️ Failed to send. Try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      <div className="wrap">
        {/* Left: Form */}
        <div className="card">
          <h2 className="title title1">Contact Us</h2>
          <p className="subtitle">We usually reply within 24 hours.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field subject">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field message">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="actions">
              <button className="btn" type="submit">
                Send Message
              </button>
              {status && <span className="status">{status}</span>}
            </div>
          </form>
        </div>

        {/* Right: Contact Details */}
        <aside className="card">
          <h2 className="title">Contact Details</h2>
          <div className="info">
            <div className="info-item">
              <div className="ico">📍</div>
              <div>
                <p className="info-title">Location</p>
                <a
                  className="info-text"
                  href="https://www.google.com/maps/place/Bafna+Resort/@20.2516392,81.5045601,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  N.H 30 Jagdalpur, Main road, C.G, Singarbhat, Kanker, Chhattisgarh 494334
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="ico">📞</div>
              <div>
                <p className="info-title">Phone</p>
                <p className="info-text">
                  <a className="link" href="tel:+9199407726406">
                    +91 994077 26406
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="ico">📧</div>
              <div>
                <p className="info-title">Email</p>
                <p className="info-text">
                  <a className="link" href="mailto:reservation@bafnaresort.com">
                    reservation@bafnaresort.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
