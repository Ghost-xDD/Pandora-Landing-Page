import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { FaArrowRight } from 'react-icons/fa';

const Possibility = () => {
  return (
    <div className="pandora__possibility section__padding" id="possibility">
      <div className="pandora__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="pandora__possibility-content">
        <h1 className="gradient__text">
          Explore a World full of Possibilities beyond your Imagination
        </h1>
        <p>
          Get acquainted with new NFTs, Gaming, and Metaverse projects in a
          virtual reality world where users can interact, play games, and
          experience things or activities as they would in the real world
        </p>
        <button type="button">
          Continue <br />  <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Possibility;
