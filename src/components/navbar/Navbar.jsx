import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -- Block Element Modifier
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>

    <p>
      <a href="#wpandora">What is Pandora?</a>
    </p>
    <p>
      <a href="#possibility">Technology</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pandora__navbar">
      <div className="pandora__navbar-links">
        <div className="pandora__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h2 className='gradient__text'>Pandora</h2>
        </div>
        <div className="pandora__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="pandora__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="pandora__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="pandora__navbar-menu_container scale-up-center">
            <div className="pandora__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="pandora__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
