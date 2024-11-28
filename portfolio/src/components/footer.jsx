// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© Ajeet Kumar . All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/ajeetpbh07" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ajeet-kumar-bab6b0257" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="mailto:kumarjeet46053@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
