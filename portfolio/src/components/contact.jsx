// src/components/Contact.jsx
import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        I'd love to hear from you! Whether you have a question, want to collaborate, or just say hi, feel free to reach out.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" className="form-input" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" className="form-input" required />
        </div>
        <div className="form-group">
          <textarea name="message" rows="5" placeholder="Your Message" className="form-textarea" required></textarea>
        </div>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
