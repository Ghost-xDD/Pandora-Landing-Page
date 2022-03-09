import React from 'react';
import './brand.css';
import { forbes, bloomberg, inc, yahoo, shopify } from './imports';

const Brand = () => {
  return (
    <div className="pandora__brand section__padding">
      <div>
        <img src={forbes} alt="forbes" />
      </div>
      <div>
        <img src={bloomberg} alt="bloomberg" />
      </div>
      <div>
        <img src={inc} alt="inc" />
      </div>
      <div>
        <img src={yahoo} alt="yahoo" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
