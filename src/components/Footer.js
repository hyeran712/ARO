import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ARO</h3>
            <p className="footer-description">
              프리미엄 웨딩 케이터링 & 이벤트 스타일링 서비스
              <br />
              특별한 순간을 완벽하게 만드는 경험
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#wedding">Wedding</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+82-2-1234-5678">+82-2-1234-5678</a>
              </li>
              <li>
                <a href="mailto:info@cateringbrand.com">
                  info@cateringbrand.com
                </a>
              </li>
              <li>Seoul, Korea</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
              <a
                href="https://kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Kakao
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ARO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
