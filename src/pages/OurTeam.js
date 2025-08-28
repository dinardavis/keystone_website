import React from "react";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1>Our Team</h1>
            <p>
              Meet the experienced professionals who are dedicated to your
              financial success and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>
              Experienced leaders guiding our firm's strategic direction and
              client relationships
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Michael Chen - Managing Partner"
                />
              </div>
              <div className="member-info">
                <h3>Michael Chen</h3>
                <p className="member-title">Managing Partner</p>
                <p className="member-bio">
                  Michael brings over 20 years of experience in financial
                  advisory and accounting services. He specializes in strategic
                  financial planning for mid-market companies and has helped
                  numerous businesses achieve sustainable growth through sound
                  financial management.
                </p>
                <div className="member-credentials">
                  <span>CPA, MBA</span>
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sarah Rodriguez - Senior Partner"
                />
              </div>
              <div className="member-info">
                <h3>Sarah Rodriguez</h3>
                <p className="member-title">Senior Partner</p>
                <p className="member-bio">
                  Sarah leads our tax services division with expertise in
                  complex tax planning and compliance. Her deep understanding of
                  tax regulations and strategic planning has saved clients
                  millions in tax liabilities while ensuring full compliance.
                </p>
                <div className="member-credentials">
                  <span>CPA, JD</span>
                  <span>18+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Partners</h2>
            <p>
              Dedicated professionals committed to delivering exceptional client
              service and results
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="David Thompson - Partner"
                />
              </div>
              <div className="member-info">
                <h3>David Thompson</h3>
                <p className="member-title">Partner - CFO Services</p>
                <p className="member-bio">
                  David specializes in providing CFO-level financial leadership
                  to growing companies. His expertise includes financial
                  modeling, fundraising support, and strategic financial
                  planning for technology and manufacturing businesses.
                </p>
                <div className="member-credentials">
                  <span>CPA, CFA</span>
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Jennifer Park - Partner"
                />
              </div>
              <div className="member-info">
                <h3>Jennifer Park</h3>
                <p className="member-title">Partner - Healthcare Services</p>
                <p className="member-bio">
                  Jennifer leads our healthcare practice with specialized
                  knowledge in medical practice management, hospital finance,
                  and healthcare compliance. She has helped numerous healthcare
                  organizations optimize their financial operations.
                </p>
                <div className="member-credentials">
                  <span>CPA, MBA</span>
                  <span>16+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Specialists</h2>
            <p>
              Expert professionals with deep knowledge in specific areas of
              financial services
            </p>
          </div>

          <div className="specialists-grid">
            <div className="specialist-card">
              <div className="specialist-image">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Robert Kim - Tax Specialist"
                />
              </div>
              <div className="specialist-info">
                <h4>Robert Kim</h4>
                <p className="specialist-title">Senior Tax Specialist</p>
                <p>
                  Expert in international tax, transfer pricing, and complex
                  business structures.
                </p>
              </div>
            </div>

            <div className="specialist-card">
              <div className="specialist-image">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Lisa Chang - Compliance Specialist"
                />
              </div>
              <div className="specialist-info">
                <h4>Lisa Chang</h4>
                <p className="specialist-title">Compliance Specialist</p>
                <p>
                  Specialized in regulatory compliance, internal controls, and
                  risk management.
                </p>
              </div>
            </div>

            <div className="specialist-card">
              <div className="specialist-image">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Marcus Johnson - Technology Specialist"
                />
              </div>
              <div className="specialist-info">
                <h4>Marcus Johnson</h4>
                <p className="specialist-title">
                  Technology Finance Specialist
                </p>
                <p>
                  Expert in SaaS metrics, startup finance, and technology
                  company valuations.
                </p>
              </div>
            </div>

            <div className="specialist-card">
              <div className="specialist-image">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Amanda Foster - Real Estate Specialist"
                />
              </div>
              <div className="specialist-info">
                <h4>Amanda Foster</h4>
                <p className="specialist-title">
                  Real Estate Finance Specialist
                </p>
                <p>
                  Specialized in real estate development finance and investment
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>
              The principles that guide our team and define our approach to
              client service
            </p>
          </div>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h4>Excellence</h4>
              <p>
                We maintain the highest standards of professional excellence in
                everything we do.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Partnership</h4>
              <p>
                We build long-term relationships based on trust, collaboration,
                and mutual success.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>
                We continuously seek innovative solutions to address our
                clients' evolving needs.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <h4>Integrity</h4>
              <p>
                We operate with unwavering integrity and ethical standards in
                all client interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work with Our Team?</h2>
            <p>
              Let's discuss how our experienced professionals can help your
              business achieve financial success.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
              <a href="/services" className="btn btn-secondary">
                Learn About Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

