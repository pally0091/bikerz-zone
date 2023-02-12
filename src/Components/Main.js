import React from 'react';
import Navbar from './Navbar/Navbar';
import './Main.css'
import Banner from './Banner/Banner';
import FeaturedBike from './FeaturedBike/FeaturedBike';
const Main = () => {
    return (
        <div>
            <div id='navbar'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <FeaturedBike></FeaturedBike>
        </div>
    );
};

export default Main;