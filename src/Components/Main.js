import React from 'react';
import Navbar from './Navbar/Navbar';
import './Main.css';
import Banner from './Banner/Banner';
import FeaturedBike from './FeaturedBike/FeaturedBike';
import NewsFeed from './NewsFeed/NewsFeed';
import Client from './Client/Client';
import Footer from './Footer/Footer';
import FAQ from './FAQ/FAQ';
const Main = () => {
    return (
        <div>
            <div id='navbar'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <FeaturedBike></FeaturedBike>
            <NewsFeed></NewsFeed>
            <Client></Client>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Main;