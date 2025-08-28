import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="#f6ad55" />
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
          <span className="logo-text">Keystone Advisory Group</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <div className="nav-item dropdown">
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <div className="dropdown-content">
              <Link to="/services#accounting" onClick={closeMenu}>
                Accounting Services
              </Link>
              <Link to="/services#tax" onClick={closeMenu}>
                Tax Planning
              </Link>
              <Link to="/services#cfo" onClick={closeMenu}>
                CFO Services
              </Link>
              <Link to="/services#compliance" onClick={closeMenu}>
                Compliance
              </Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <Link
              to="/industries"
              className={`nav-link ${isActive("/industries") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Industries
            </Link>
            <div className="dropdown-content">
              <Link to="/industries#healthcare" onClick={closeMenu}>
                Healthcare
              </Link>
              <Link to="/industries#manufacturing" onClick={closeMenu}>
                Manufacturing
              </Link>
              <Link to="/industries#technology" onClick={closeMenu}>
                Technology
              </Link>
              <Link to="/industries#real-estate" onClick={closeMenu}>
                Real Estate
              </Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <Link
              to="/our-team"
              className={`nav-link ${isActive("/our-team") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Our Team
            </Link>
            <div className="dropdown-content">
              <Link to="/our-team#leadership" onClick={closeMenu}>
                Leadership
              </Link>
              <Link to="/our-team#partners" onClick={closeMenu}>
                Partners
              </Link>
              <Link to="/our-team#specialists" onClick={closeMenu}>
                Specialists
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>

          <Link
            to="/careers"
            className={`nav-link ${isActive("/careers") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Careers
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
