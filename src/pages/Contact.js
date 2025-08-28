import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>
              Ready to discuss your financial needs? Let's start a conversation
              about how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Get in Touch</h2>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitSuccess ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you within 24 hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="accounting">Accounting Services</option>
                        <option value="tax">Tax Planning</option>
                        <option value="cfo">CFO Services</option>
                        <option value="compliance">Compliance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your financial needs and how we can help..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p>
                We're here to help. Reach out to us through any of these
                channels.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h4>Office Location</h4>
                    <p>
                      123 Financial District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>info@keystoneadvisory.com</p>
                    <p>We respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-content">
                    <h4>Consultation</h4>
                    <p>
                      Free initial consultation
                      <br />
                      No obligation required
                    </p>
                  </div>
                </div>
              </div>

              <div className="emergency-contact">
                <h4>Urgent Matters?</h4>
                <p>For urgent financial matters, call our emergency line:</p>
                <p className="emergency-phone">+1 (555) 999-8888</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Office</h2>
            <p>Located in the heart of New York's Financial District</p>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <h3>Interactive Map</h3>
                <p>
                  Our office is conveniently located in the Financial District,
                  easily accessible by public transportation.
                </p>
                <div className="map-details">
                  <p>
                    <strong>Address:</strong> 123 Financial District, New York,
                    NY 10001
                  </p>
                  <p>
                    <strong>Subway:</strong> 4, 5, 6 trains to Wall Street
                  </p>
                  <p>
                    <strong>Parking:</strong> Street parking and nearby garages
                    available
                  </p>
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
            <h2>Ready to Get Started?</h2>
            <p>
              Schedule a free consultation to discuss your financial needs and
              how we can help.
            </p>
            <div className="cta-buttons">
              <a href="tel:+15551234567" className="btn btn-primary">
                Call Now
              </a>
              <a
                href="mailto:info@keystoneadvisory.com"
                className="btn btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

