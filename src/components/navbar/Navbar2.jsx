import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/dummy.svg';
import './navbar2.css';
import Expert from "../book an expert/expert";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hp__navbar">
      <div className="hp__navbar-content-frame">
          <div className="hp__navbar-logo-box">
              <img src={logo} />
              <p>ShopStories</p>
        </div>
          <div className="hp__navbar-content-box">
              <div className="hp__navbar-content-inner-box">
                  <h1>LeaderBoard</h1>
              </div>
              <div className="hp__navbar-content-inner-box">
                  <h1>Content</h1>
              </div>
              {/*<div className="hp__navbar-content-inner-box">*/}
              {/*    <h1>Become an Expert</h1>*/}
              {/*</div>*/}
              <Expert />
              <div className="hp__navbar-content-inner-box">
                  <h1>Book</h1>
              </div>
              <div className="hp__navbar-content-inner-box">
                  <h1>Find Experts</h1>
              </div>
              <div className="hp__navbar-content-inner-box">
                  <div className="hp__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
