import React from 'react';
import Navbar from './Navbar/Navbar';
import './Main.css'
import Banner from './Banner/Banner';
const Main = () => {
    return (
        <div>
            <div id='navbar'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Main;