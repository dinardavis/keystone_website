import React from "react";
import "./Industries.css";

const Industries = () => {
  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <div className="industries-hero-content">
            <h1>Industries We Serve</h1>
            <p>
              Specialized financial solutions tailored to the unique challenges
              and opportunities of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section industries-grid">
        <div className="container">
          <div className="industries-container">
            {/* Healthcare */}
            <div id="healthcare" className="industry-card">
              <div className="industry-image">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Healthcare industry financial services"
                />
                <div className="industry-overlay">
                  <div className="industry-icon">🏥</div>
                </div>
              </div>

              <div className="industry-content">
                <h2>Healthcare</h2>
                <p>
                  Navigating the complex financial landscape of healthcare with
                  specialized expertise in medical practice management, hospital
                  finance, and healthcare compliance.
                </p>

                <div className="industry-features">
                  <div className="feature">
                    <h4>Medical Practice Management</h4>
                    <p>
                      Financial optimization for private practices, billing
                      optimization, and revenue cycle management.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Healthcare Compliance</h4>
                    <p>
                      Ensuring adherence to HIPAA, Medicare, and other
                      healthcare-specific regulations.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Hospital Finance</h4>
                    <p>
                      Strategic financial planning for healthcare systems, cost
                      management, and capital planning.
                    </p>
                  </div>
                </div>

                <div className="industry-cta">
                  <a href="/contact" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Manufacturing */}
            <div id="manufacturing" className="industry-card">
              <div className="industry-image">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Manufacturing industry financial services"
                />
                <div className="industry-overlay">
                  <div className="industry-icon">🏭</div>
                </div>
              </div>

              <div className="industry-content">
                <h2>Manufacturing</h2>
                <p>
                  Supporting manufacturing businesses with cost analysis,
                  inventory management, and financial strategies for operational
                  efficiency and growth.
                </p>

                <div className="industry-features">
                  <div className="feature">
                    <h4>Cost Analysis & Control</h4>
                    <p>
                      Detailed cost accounting, variance analysis, and
                      operational cost optimization strategies.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Inventory Management</h4>
                    <p>
                      Financial strategies for inventory optimization, working
                      capital management, and supply chain finance.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Capital Investment Planning</h4>
                    <p>
                      Strategic planning for equipment purchases, facility
                      expansion, and technology investments.
                    </p>
                  </div>
                </div>

                <div className="industry-cta">
                  <a href="/contact" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Technology */}
            <div id="technology" className="industry-card">
              <div className="industry-image">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Technology industry financial services"
                />
                <div className="industry-overlay">
                  <div className="industry-icon">💻</div>
                </div>
              </div>

              <div className="industry-content">
                <h2>Technology</h2>
                <p>
                  Empowering tech companies with financial strategies for rapid
                  growth, funding rounds, and scalable financial operations.
                </p>

                <div className="industry-features">
                  <div className="feature">
                    <h4>Startup Finance</h4>
                    <p>
                      Financial modeling, investor relations, and growth
                      planning for early-stage technology companies.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Revenue Recognition</h4>
                    <p>
                      Complex revenue recognition for SaaS, subscription models,
                      and technology licensing agreements.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Funding & M&A Support</h4>
                    <p>
                      Financial due diligence, valuation support, and
                      transaction advisory for technology companies.
                    </p>
                  </div>
                </div>

                <div className="industry-cta">
                  <a href="/contact" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Real Estate */}
            <div id="real-estate" className="industry-card">
              <div className="industry-image">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Real estate industry financial services"
                />
                <div className="industry-overlay">
                  <div className="industry-icon">🏢</div>
                </div>
              </div>

              <div className="industry-content">
                <h2>Real Estate</h2>
                <p>
                  Comprehensive financial services for real estate developers,
                  investors, and property management companies.
                </p>

                <div className="industry-features">
                  <div className="feature">
                    <h4>Development Finance</h4>
                    <p>
                      Financial modeling, feasibility analysis, and capital
                      structure optimization for real estate projects.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Investment Analysis</h4>
                    <p>
                      Cash flow modeling, ROI analysis, and investment portfolio
                      management for real estate investors.
                    </p>
                  </div>
                  <div className="feature">
                    <h4>Property Management</h4>
                    <p>
                      Financial reporting, tenant accounting, and operational
                      finance for property management companies.
                    </p>
                  </div>
                </div>

                <div className="industry-cta">
                  <a href="/contact" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="section expertise-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Industry Expertise Matters</h2>
            <p>
              Understanding your industry's unique challenges enables us to
              provide more effective financial solutions
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="expertise-icon">📊</div>
              <h4>Industry-Specific Metrics</h4>
              <p>
                We track and analyze the key performance indicators that matter
                most in your industry.
              </p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">🔍</div>
              <h4>Regulatory Knowledge</h4>
              <p>
                Deep understanding of industry-specific regulations and
                compliance requirements.
              </p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">📈</div>
              <h4>Growth Strategies</h4>
              <p>
                Financial strategies tailored to your industry's growth patterns
                and market dynamics.
              </p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">🤝</div>
              <h4>Industry Network</h4>
              <p>
                Connections and insights from working with similar businesses in
                your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Industry-Specific Financial Solutions?</h2>
            <p>
              Let's discuss how our industry expertise can benefit your
              business.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
              <a href="/services" className="btn btn-secondary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

