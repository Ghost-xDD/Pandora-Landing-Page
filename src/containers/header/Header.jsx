import React from 'react';
import ai from '../../assets/ai.png';
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <div className="pandora__header section__padding">
      <div className="pandora__header-content ">
        <div className="gradient__text">
          <Typewriter
            className="gradient__text"
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Welcome to the Blockchain Platform designed for scalability..'
                )
                .start();
            }}
          />
        </div>
        <h1 className="gradient__text">
          {/* Welcome to the Blockchain designed for scalability */}
        </h1>
        <p>
          A highly scalable, fast and secure blockchain platform for distributed
          apps, enterprise use cases and the new internet economy.
        </p>

        <div className="pandora__header-cta">
          <button className="pandora__header-cta-btn" type="button">
            Explore Pandora <FaArrowRight />{' '}
          </button>
        </div>

        <div className="pandora__header-content__people"></div>
      </div>

      <div className="pandora__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
