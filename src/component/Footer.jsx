import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        
        {/* Company Info */}
        <div className="footer__col">
          <h2 className="logo">Bafna Resort</h2>
          <p>+91 94077 26406</p>
          <p> reservation@bafnaresort.com</p>
          <p>N.H 30 Jagdalpur, Main road, C.G, Singarbhat, Kanker, Chhattisgarh 494334</p>
        </div>

        {/* Blog Section */}
        <div className="footer__col">
          <h4>Our Blog</h4>
          <ul>
            <li><a href="/">Luxury Hotel Design Ideas</a> <span>Aug 21, 2025</span></li>
            <li><a href="/">How to Make Your Stay Memorable</a> <span>Aug 15, 2025</span></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__col">
          <h4>Subscribe Newsletter</h4>
          <p>Subscribe to get our latest updates & offers.</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">➤</button>
          </form>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="https://www.instagram.com/bafnaresort?igsh=YjZ0cGM5dWtmM3N2"><FaInstagram /></a>
        
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Bafna Resort. All rights reserved | Made with ❤️ by Hr Advertisement</p>
      </div>
    </footer>
  );
}

export default Footer;
