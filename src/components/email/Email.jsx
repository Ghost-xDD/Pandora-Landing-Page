import React from 'react';
import './email.css';

const Email = () => {
  return (
    <div className="pandora__header-input">
      <p>Stay informed and never miss a Pandora update!</p>
      <input type="email" placeholder="Your Email Address" />
      <button type="button">Subscribe</button>
    </div>
  );
};

export default Email;
