import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <img src="/logo.png" alt="Persist Startupathon" className="logo" /> */}
        <p>
          We partner with entrepreneurs and businesses to help scale and grow
          their ideas. With a diverse team, there is no business we cannot help
          get a leg up.
        </p>
        <div className="social-icons">
          {/* <a className="social-icon">🔗
          <a className="social-icon">📷
          <a className="social-icon">▶ */}
        </div>
      </div>

      <div className="footer-middle">
        <h4>Quick links</h4>
        <ul>
          <li>Home</li>
          <li>Investor Application</li>
          <li>Job Application</li>
          <li>Apply To Startup Accelerator</li>
          <li>Career Accelerator Program</li>
          <li>Our team</li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Legal</h4>
        <ul>
          <li>Terms of service</li>
          <li>Privacy policy</li>
          <li>Decentralized Intelligence Agency</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
