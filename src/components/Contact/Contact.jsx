import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple toast notification simulation
    alert(
      "Message Sent! Thank you for reaching out. I'll get back to you soon."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">
            Get In <span className="contact-title-accent">Touch</span>
          </h2>
          <div className="contact-divider" />

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <p className="contact-description">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-content">
                    <div className="contact-card-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="contact-card-text">
                      <h3 className="contact-card-title">Email</h3>
                      <p className="contact-card-subtitle">
                        your.email@example.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-content">
                    <div className="contact-card-icon phone-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="contact-card-text">
                      <h3 className="contact-card-title">Phone</h3>
                      <p className="contact-card-subtitle">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-content">
                    <div className="contact-card-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact-card-text">
                      <h3 className="contact-card-title">Location</h3>
                      <p className="contact-card-subtitle">
                        Your City, Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-textarea"
                  />
                </div>
                <button type="submit" className="form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
