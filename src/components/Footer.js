import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 5L35 15V25L20 35L5 25V15L20 5Z"
                      fill="#f6ad55"
                    />
                    <path
                      d="M20 10L30 17.5V25L20 32.5L10 25V17.5L20 10Z"
                      fill="#ed8936"
                    />
                    <text
                      x="20"
                      y="24"
                      textAnchor="middle"
                      fill="#1a365d"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      K
                    </text>
                  </svg>
                </div>
                <h3>Keystone Advisory Group</h3>
              </div>
              <p className="footer-description">
                Structuring financial confidence through tailored accounting,
                tax, and CFO services that help businesses grow with clarity and
                compliance.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/services#accounting">Accounting Services</Link>
                </li>
                <li>
                  <Link to="/services#tax">Tax Planning</Link>
                </li>
                <li>
                  <Link to="/services#cfo">CFO Services</Link>
                </li>
                <li>
                  <Link to="/services#compliance">Compliance</Link>
                </li>
                <li>
                  <Link to="/services">View All Services</Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-section">
              <h4>Industries</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/industries#healthcare">Healthcare</Link>
                </li>
                <li>
                  <Link to="/industries#manufacturing">Manufacturing</Link>
                </li>
                <li>
                  <Link to="/industries#technology">Technology</Link>
                </li>
                <li>
                  <Link to="/industries#real-estate">Real Estate</Link>
                </li>
                <li>
                  <Link to="/industries">View All Industries</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-section">
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="contact-info">
                <p>
                  📍 123 Financial District
                  <br />
                  New York, NY 10001
                </p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@keystoneadvisory.com</p>
                <p>🕒 Mon-Fri: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 Keystone Advisory Group. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
                <a href="/sitemap">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

