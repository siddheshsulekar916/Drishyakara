import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Contact = () => {
  useReveal();

  return (
    <>
      {/* Contact Header */}
      <header className="tour-header fade-down">
        <div className="container text-center mt-6">
          <h1 className="page-title reveal-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '50px' }}>Let's Talk</h1>
          <p className="page-subtitle reveal-text delay-1" style={{ marginBottom: '20px' }}>Bring your blueprints to life with our premium visualization services.</p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="section contact-section fade-up delay-1" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info dark-alt fade-up delay-2">
              <h2>Get In Touch</h2>
              <p>Ready to start your next architectural project? Reach out to us for a consultation or quote. Our team of expert 3D artists is ready to deliver hyper-realistic results.</p>
              
              <div className="info-item">
                <strong>Studio Address</strong>
                <p>Ganesh Park, Bondre Nagar, Kolhapur, Maharashtra -<br />Design District, Metropolis</p>
              </div>
              
              <div className="info-item">
                <strong>Direct Contact</strong>
                <p>Email: <a href="mailto:siddheshsulekar4@gmail.com" style={{ color: 'var(--accent-color)' }}>siddheshsulekar4@gmail.com</a><br />
                Phone: <a href="tel:+918468823037" style={{ color: 'var(--accent-color)' }}>+91 8468823037</a></p>
              </div>

              <div className="info-item">
                 <strong>Business Hours</strong>
                 <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday & Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper fade-up delay-2">
              <form action="#" className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email address" required />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Interested Service</label>
                  <select id="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="3d-render">3D Rendering & Visualization</option>
                    <option value="virtual-tour">360&deg; Virtual Tour (Walkthrough)</option>
                    <option value="animation">Architectural Animation</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message Details</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">Send Message <span className="arrow">→</span></button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
