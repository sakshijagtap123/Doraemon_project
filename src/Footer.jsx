import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="mb-0">© 2024 Doraemon. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
