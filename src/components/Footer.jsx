// Footer.jsx
import React from 'react';
import logo from './logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-columns">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="OneThrive Logo" />
            </div>
            <p>Empowering you to build lasting habits and achieve consistent personal growth.</p>
            
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Growth Library</a></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe</h3>
            <p>Get weekly tips and resources to help you grow.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
        <div className="footer-socials">
              <a href="#">🌐</a>
              <a href="#">🐦</a>
              <a href="#">💬</a>
              <a href="#">📷</a>
            </div>
          <p>© {currentYear} OneThrive. All rights reserved.</p>
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
