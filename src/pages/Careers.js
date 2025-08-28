import React, { useState } from "react";
import "./Careers.css";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Tax Manager",
      department: "Tax Services",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description:
        "We are seeking an experienced tax professional to lead our tax services division and manage complex client relationships.",
      requirements: [
        "CPA certification required",
        "5+ years of public accounting experience",
        "Strong knowledge of corporate and partnership taxation",
        "Excellent client communication skills",
        "Experience with tax planning and compliance",
      ],
    },
    {
      id: 2,
      title: "CFO Services Consultant",
      department: "CFO Services",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "7+ years",
      description:
        "Join our CFO services team to provide strategic financial leadership to growing companies across various industries.",
      requirements: [
        "MBA or CPA preferred",
        "7+ years of financial leadership experience",
        "Experience with financial modeling and analysis",
        "Strong strategic thinking and problem-solving skills",
        "Experience in technology or manufacturing industries a plus",
      ],
    },
    {
      id: 3,
      title: "Accounting Manager",
      department: "Accounting Services",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Lead our accounting services team and ensure exceptional client service delivery for businesses of all sizes.",
      requirements: [
        "CPA certification preferred",
        "4+ years of accounting experience",
        "Experience with QuickBooks and other accounting software",
        "Strong team leadership skills",
        "Excellent attention to detail",
      ],
    },
    {
      id: 4,
      title: "Compliance Specialist",
      department: "Compliance & Risk",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Help ensure our clients meet all regulatory requirements and maintain robust internal control systems.",
      requirements: [
        "Bachelor's degree in Accounting or related field",
        "3+ years of compliance or audit experience",
        "Knowledge of SOX and other regulatory frameworks",
        "Strong analytical and documentation skills",
        "Experience with healthcare compliance a plus",
      ],
    },
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <h1>Join Our Team</h1>
            <p>
              Build your career with a firm that values excellence, innovation,
              and professional growth. Join our team of dedicated financial
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="section tabs-section">
        <div className="container">
          <div className="careers-tabs">
            <button
              className={`tab-button ${
                activeTab === "openings" ? "active" : ""
              }`}
              onClick={() => setActiveTab("openings")}
            >
              Open Positions
            </button>
            <button
              className={`tab-button ${
                activeTab === "culture" ? "active" : ""
              }`}
              onClick={() => setActiveTab("culture")}
            >
              Company Culture
            </button>
            <button
              className={`tab-button ${
                activeTab === "benefits" ? "active" : ""
              }`}
              onClick={() => setActiveTab("benefits")}
            >
              Benefits & Growth
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section tab-content-section">
        <div className="container">
          {/* Job Openings Tab */}
          {activeTab === "openings" && (
            <div className="tab-content">
              <div className="section-header">
                <h2>Open Positions</h2>
                <p>
                  Explore current opportunities to join our growing team of
                  financial professionals
                </p>
              </div>

              <div className="jobs-grid">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <h3>{job.title}</h3>
                      <div className="job-meta">
                        <span className="job-department">{job.department}</span>
                        <span className="job-location">{job.location}</span>
                        <span className="job-type">{job.type}</span>
                        <span className="job-experience">{job.experience}</span>
                      </div>
                    </div>

                    <div className="job-description">
                      <p>{job.description}</p>
                    </div>

                    <div className="job-requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="job-actions">
                      <button className="btn btn-primary">Apply Now</button>
                      <button className="btn btn-secondary">Learn More</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="general-application">
                <h3>Don't See the Right Fit?</h3>
                <p>
                  We're always looking for talented professionals. Send us your
                  resume and we'll keep you in mind for future opportunities.
                </p>
                <button className="btn btn-primary">
                  Submit General Application
                </button>
              </div>
            </div>
          )}

          {/* Company Culture Tab */}
          {activeTab === "culture" && (
            <div className="tab-content">
              <div className="section-header">
                <h2>Our Company Culture</h2>
                <p>
                  Discover what makes Keystone Advisory Group a great place to
                  work and grow your career
                </p>
              </div>

              <div className="culture-grid">
                <div className="culture-item">
                  <div className="culture-icon">🎯</div>
                  <h3>Mission-Driven</h3>
                  <p>
                    We're passionate about helping businesses achieve financial
                    success and sustainable growth. Every team member
                    contributes to this mission.
                  </p>
                </div>

                <div className="culture-item">
                  <div className="culture-icon">🤝</div>
                  <h3>Collaborative Environment</h3>
                  <p>
                    We believe in the power of teamwork and collaboration. Our
                    open office environment encourages knowledge sharing and
                    mutual support.
                  </p>
                </div>

                <div className="culture-item">
                  <div className="culture-icon">📚</div>
                  <h3>Continuous Learning</h3>
                  <p>
                    We invest in our team's professional development through
                    training programs, certifications, and industry conferences.
                  </p>
                </div>

                <div className="culture-item">
                  <div className="culture-icon">💡</div>
                  <h3>Innovation Focus</h3>
                  <p>
                    We encourage creative thinking and innovative solutions to
                    help our clients stay ahead in an ever-changing financial
                    landscape.
                  </p>
                </div>

                <div className="culture-item">
                  <div className="culture-icon">⚖️</div>
                  <h3>Work-Life Balance</h3>
                  <p>
                    We understand the importance of maintaining a healthy
                    balance between professional excellence and personal
                    well-being.
                  </p>
                </div>

                <div className="culture-item">
                  <div className="culture-icon">🌟</div>
                  <h3>Recognition & Growth</h3>
                  <p>
                    We celebrate achievements and provide clear career paths for
                    professional growth and advancement within our firm.
                  </p>
                </div>
              </div>

              <div className="team-photos">
                <h3>Life at Keystone</h3>
                <div className="photos-grid">
                  <div className="photo-item">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Team collaboration meeting"
                    />
                    <p>Team collaboration and brainstorming sessions</p>
                  </div>
                  <div className="photo-item">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Professional development training"
                    />
                    <p>Professional development and training opportunities</p>
                  </div>
                  <div className="photo-item">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Team celebration and recognition"
                    />
                    <p>Celebrating team achievements and milestones</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits & Growth Tab */}
          {activeTab === "benefits" && (
            <div className="tab-content">
              <div className="section-header">
                <h2>Benefits & Professional Growth</h2>
                <p>
                  We offer comprehensive benefits and opportunities for career
                  advancement
                </p>
              </div>

              <div className="benefits-grid">
                <div className="benefits-category">
                  <h3>Health & Wellness</h3>
                  <ul>
                    <li>
                      Comprehensive health insurance (medical, dental, vision)
                    </li>
                    <li>
                      Health savings account (HSA) with company contribution
                    </li>
                    <li>Wellness programs and gym membership reimbursement</li>
                    <li>Mental health support and counseling services</li>
                  </ul>
                </div>

                <div className="benefits-category">
                  <h3>Financial Benefits</h3>
                  <ul>
                    <li>Competitive salary with performance bonuses</li>
                    <li>401(k) retirement plan with company match</li>
                    <li>Professional development budget</li>
                    <li>Certification and continuing education support</li>
                  </ul>
                </div>

                <div className="benefits-category">
                  <h3>Work-Life Balance</h3>
                  <ul>
                    <li>Flexible work arrangements and remote options</li>
                    <li>Generous paid time off and holidays</li>
                    <li>Parental leave and family support</li>
                    <li>Flexible scheduling for personal commitments</li>
                  </ul>
                </div>

                <div className="benefits-category">
                  <h3>Professional Development</h3>
                  <ul>
                    <li>Mentorship programs with senior professionals</li>
                    <li>Industry conference attendance and networking</li>
                    <li>Internal training and skill development</li>
                    <li>Clear career progression paths</li>
                  </ul>
                </div>
              </div>

              <div className="growth-opportunities">
                <h3>Career Growth Paths</h3>
                <div className="growth-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker">1-2 Years</div>
                    <div className="timeline-content">
                      <h4>Foundation Building</h4>
                      <p>
                        Develop core skills, build client relationships, and
                        establish professional credibility.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">3-5 Years</div>
                    <div className="timeline-content">
                      <h4>Specialization</h4>
                      <p>
                        Focus on specific service areas, lead client
                        engagements, and mentor junior team members.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">5+ Years</div>
                    <div className="timeline-content">
                      <h4>Leadership</h4>
                      <p>
                        Take on management responsibilities, develop business
                        relationships, and contribute to firm strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Team?</h2>
            <p>
              Take the next step in your career with a firm that values your
              growth and success.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">View Open Positions</button>
              <a href="/contact" className="btn btn-secondary">
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

