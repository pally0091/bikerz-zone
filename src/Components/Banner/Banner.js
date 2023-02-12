import React from 'react';
import './Banner.css';
import bike from '../../images/header-bike.png';

const Banner = () => {
    return (
      <div id="banner">
        <div id='banner-txt'>
          <p>
            Computer-controlled digital transistorized with electronic advance
          </p>
          <h1>Honda CBR 300R</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            </p>
            <button>Purchase</button>
        </div>
        <div id='banner-img'>
            <img src={bike} alt=''></img>
        </div>
      </div>
    );
};

export default Banner;