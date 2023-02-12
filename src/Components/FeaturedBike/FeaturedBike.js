import React from 'react';
import './FeaturedBike.css';
import bike1 from '../../images/bike-4.jpg';
import bike2 from '../../images/feature-bike.jpg';


const FeaturedBike = () => {
    return (
      <div id="container">
        <h1>Fetured Bikes In This Year</h1>
        <div id='bike-container'>
            <img src={bike1} alt=''></img>        
            <img src={bike2} alt=''></img>        
            <img src={bike1} alt=''></img>        
        </div>
      </div>
    );
};

export default FeaturedBike;