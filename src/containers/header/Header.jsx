import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Welcome to the Blockchain designed for scalability
        </h1>
        <p>
          A highly scalable, fast and secure blockchain platform for distributed
          apps, enterprise use cases and the new internet economy.
        </p>

        <div className="gpt3__header-cta">
          <button className="gpt3__header-cta-btn" type="button">
            Explore Pandora <FaArrowRight />{' '}
          </button>
        </div>

        <div className="gpt3__header-content__people"></div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
