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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setStatus("Thanks! Your message has been sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
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
              <button className="btn" type="submit">Send Message</button>
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
                <p className="info-text">123 Main Street, Kolkata, WB 700001</p>
              </div>
            </div>

            <div className="info-item">
              <div className="ico">📞</div>
              <div>
                <p className="info-title">Phone</p>
                <p className="info-text">
                  <a className="link" href="tel:+919876543210">+91 98765 43210</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="ico">📧</div>
              <div>
                <p className="info-title">Email</p>
                <p className="info-text">
                  <a className="link" href="mailto:contact@example.com">contact@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
