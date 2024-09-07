import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/image 1.png';
import './header2.css';

const Header2 = () => (
  <div className="hp__header" id="home">
      <div className="hp__header-frame">

          <div className="hp__header-content">
              <h1>Title Website Headline</h1>
              <p>This is a website for a fictional
                  company that develops an app
                  that provides features and services for its users</p>

              {/*<div className="hp__header-content-button">*/}
                  <button type="button" className="hp__header-content-button">Get Started</button>
              {/*</div>*/}

          </div>

          <div className="hp__header-image">
              <img src={ai} />
          </div>

      </div>
  </div>
);

export default Header2;
