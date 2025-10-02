import React from "react";
import "../style/Footer.css"; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Himanshu Kirodiwal</h2>
          <p>Full-Stack Developer | React Enthusiast</p>
        </div>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/himanshu-kirodiwal-371b58246"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            💼
          </a>
          <a href="mailto:himanshukirodiwal21@gmail.com" title="Email">
            📧
          </a>
          <a href="tel:+918058875153" title="Call">
            📞
          </a>
          <a
            href="https://github.com/himanshukirodiwal21"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            💻
          </a>
        </div>

        <div className="footer-credits">
          <p>&copy; 2025 Himanshu Kirodiwal. All rights reserved.</p>
          <p>
            Built with passion and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
