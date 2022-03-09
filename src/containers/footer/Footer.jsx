import React from 'react';
import './footer.css';
import pandoraLogo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="pandora__footer section__padding">
      <div className="pandora__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others??
        </h1>
      </div>

      <div className="pandora__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="pandora__footer-links">
        <div className="pandora__footer-links_logo">
          <h2 className="gradient__text">Pandora</h2>
          <p>Harmony Estate, Abeokuta. All Rights Reserved</p>
        </div>

        <div className="pandora__footer-links_div">
          <h4>Technology</h4>
          <p>Roadmap</p>
          <p>Token</p>
          <p>Telemetry</p>
          <p>Substrate</p>
          <p>Lightpaper</p>
          <p>Whitepaper</p>
        </div>

        <div className="pandora__footer-links_div">
          <h4>Community</h4>
          <p>Documentation</p>
          <p>Brand Assets</p>
          <p>Blog</p>
          <p>Element Chat</p>
          <p>Medium</p>
        </div>

        <div className="pandora__footer-links_div">
          <h4>Get in touch</h4>
          <p>Harmony Estate, Abeokuta.</p>
          <p>ademola@info</p>
        </div>
      </div>

      <div className="pandora__footer-copyright">
        <p>&copy; 2022 Pandora. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
