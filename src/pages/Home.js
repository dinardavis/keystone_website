import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Keystone</span>
                <span className="title-line">Advisory</span>
                <span className="title-line">Group</span>
              </h1>
              <p className="hero-description">
                Structuring financial confidence. Keystone Advisory delivers
                tailored accounting, tax, and CFO services to help your business
                grow with clarity and compliance.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Schedule a Consultation
                </Link>
              </div>
              <div className="hero-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <div className="diagonal-accent"></div>
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional business discussion between two executives"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in-up">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 7H15V9H9V7Z" fill="#f6ad55" />
                  <path d="M9 11H15V13H9V11Z" fill="#f6ad55" />
                  <path d="M9 15H15V17H9V15Z" fill="#f6ad55" />
                  <path
                    d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3Z"
                    stroke="#1a365d"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Accounting Services</h3>
              <p>
                Comprehensive bookkeeping, financial reporting, and accounting
                system optimization for businesses of all sizes.
              </p>
              <Link to="/services#accounting" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="#f6ad55"
                  />
                  <path
                    d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z"
                    fill="#f6ad55"
                  />
                </svg>
              </div>
              <h3>Tax Planning</h3>
              <p>
                Strategic tax planning and preparation to minimize liabilities
                and maximize savings for individuals and businesses.
              </p>
              <Link to="/services#tax" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="#f6ad55"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="#1a365d"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>CFO Services</h3>
              <p>
                Strategic financial leadership, budgeting, forecasting, and
                financial analysis to drive business growth and profitability.
              </p>
              <Link to="/services#cfo" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-left slide-in-left">
              <h2>Why Choose Keystone Advisory?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-text">
                    <h4>Expert Team</h4>
                    <p>
                      Certified professionals with decades of combined
                      experience in financial advisory.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-text">
                    <h4>Personalized Approach</h4>
                    <p>
                      Tailored solutions that align with your business goals and
                      industry requirements.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-text">
                    <h4>Proven Results</h4>
                    <p>
                      Track record of helping businesses achieve financial
                      clarity and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-right slide-in-right">
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Clients Served</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Financial Future?</h2>
            <p>
              Let's discuss how Keystone Advisory can help your business achieve
              financial clarity and growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

