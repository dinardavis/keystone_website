import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>
              Comprehensive financial solutions designed to drive your business
              forward with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-detailed">
        <div className="container">
          <div className="services-grid-detailed">
            {/* Accounting Services */}
            <div id="accounting" className="service-item">
              <div className="service-header">
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
                <h2>Accounting Services</h2>
                <p>
                  Comprehensive financial management and reporting solutions
                  tailored to your business needs.
                </p>
              </div>

              <div className="service-content">
                <div className="service-features">
                  <div className="feature-item">
                    <h4>Bookkeeping & General Ledger</h4>
                    <p>
                      Accurate and timely recording of financial transactions,
                      maintaining organized records for better decision-making.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Financial Statement Preparation</h4>
                    <p>
                      Professional preparation of balance sheets, income
                      statements, and cash flow statements.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Account Reconciliation</h4>
                    <p>
                      Regular reconciliation of bank accounts, credit cards, and
                      other financial accounts to ensure accuracy.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Chart of Accounts Optimization</h4>
                    <p>
                      Customized account structure designed to provide
                      meaningful financial insights for your business.
                    </p>
                  </div>
                </div>

                <div className="service-image">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional accounting and bookkeeping services"
                  />
                </div>
              </div>
            </div>

            {/* Tax Services */}
            <div id="tax" className="service-item">
              <div className="service-header">
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
                <h2>Tax Planning & Preparation</h2>
                <p>
                  Strategic tax solutions to minimize liabilities and maximize
                  savings for individuals and businesses.
                </p>
              </div>

              <div className="service-content reverse">
                <div className="service-image">
                  <img
                    src="https://images.unsplash.com/photo-1554224154-26032cdc-5c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Tax planning and preparation services"
                  />
                </div>

                <div className="service-features">
                  <div className="feature-item">
                    <h4>Business Tax Returns</h4>
                    <p>
                      Comprehensive preparation of corporate, partnership, and
                      LLC tax returns with strategic planning.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Individual Tax Planning</h4>
                    <p>
                      Personal tax strategies to optimize deductions, credits,
                      and overall tax position.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Tax Strategy & Consulting</h4>
                    <p>
                      Proactive tax planning to minimize future tax burdens and
                      maximize financial opportunities.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>IRS Representation</h4>
                    <p>
                      Professional representation during audits, collections,
                      and other IRS matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CFO Services */}
            <div id="cfo" className="service-item">
              <div className="service-header">
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
                <h2>CFO Services</h2>
                <p>
                  Strategic financial leadership and analysis to drive business
                  growth, profitability, and long-term success.
                </p>
              </div>

              <div className="service-content">
                <div className="service-features">
                  <div className="feature-item">
                    <h4>Financial Strategy & Planning</h4>
                    <p>
                      Development of comprehensive financial strategies aligned
                      with business objectives and market conditions.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Budgeting & Forecasting</h4>
                    <p>
                      Detailed financial modeling, budgeting, and forecasting to
                      support strategic decision-making.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Cash Flow Management</h4>
                    <p>
                      Optimization of cash flow through improved collections,
                      payment strategies, and working capital management.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Financial Analysis & Reporting</h4>
                    <p>
                      Advanced financial analysis, KPI development, and
                      executive reporting for stakeholders.
                    </p>
                  </div>
                </div>

                <div className="service-image">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="CFO services and financial leadership"
                  />
                </div>
              </div>
            </div>

            {/* Compliance Services */}
            <div id="compliance" className="service-item">
              <div className="service-header">
                <div className="service-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#f6ad55"
                      strokeWidth="2"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#1a365d"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h2>Compliance & Risk Management</h2>
                <p>
                  Ensuring your business meets all regulatory requirements while
                  minimizing financial and operational risks.
                </p>
              </div>

              <div className="service-content reverse">
                <div className="service-image">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Compliance and risk management services"
                  />
                </div>

                <div className="service-features">
                  <div className="feature-item">
                    <h4>Regulatory Compliance</h4>
                    <p>
                      Ensuring adherence to all applicable financial
                      regulations, standards, and reporting requirements.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Internal Controls</h4>
                    <p>
                      Development and implementation of robust internal control
                      systems to safeguard assets and ensure accuracy.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Risk Assessment</h4>
                    <p>
                      Comprehensive risk identification, assessment, and
                      mitigation strategies for financial operations.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h4>Audit Support</h4>
                    <p>
                      Preparation and support during financial audits, ensuring
                      smooth processes and positive outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>
              A systematic approach to delivering exceptional financial services
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Discovery & Assessment</h4>
              <p>
                We begin by understanding your business, goals, and current
                financial situation to develop a tailored approach.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Strategy Development</h4>
              <p>
                Based on our assessment, we create a comprehensive financial
                strategy designed to achieve your objectives.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Implementation</h4>
              <p>
                We execute the strategy with precision, ensuring all processes
                are properly established and optimized.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Ongoing Support</h4>
              <p>
                Continuous monitoring, reporting, and strategic adjustments to
                maintain optimal financial performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss how our services can help your business achieve
              financial success.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

