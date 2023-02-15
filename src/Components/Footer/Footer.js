import React from 'react';
import './Footer.css';
import android from '../../images/android.png';
import ios from '../../images/ios.png';

const Footer = () => {
    return (
      <div id="footer">
        <div id="f-ccontents">
          <ul id="l-1">
            <a href="/">Download Now</a>
            <a href="/">Licenses</a>
          </ul>
          <ul id="l-2">
            <a href="/">About</a>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Careers</a>
            <a href="/">Help</a>
            <a href="/">Privacy Policy</a>
          </ul>
          <p> 2020 bike. All rights reserved </p>
        </div>
        <div id="f-apps">
          <p>Get The App</p>
          <div id='f-img'>
            <img
              src={android}
              alt=""
            ></img>
            <img
              src={ios}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    );
};

export default Footer;