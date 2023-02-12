import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div id='nav'>
            <div id='nav-items'>
                <a href='/'>Home</a>
                <a href='/'>Shop</a>
                <a href='/'>News</a>
                <a href='/'>Contact</a>
            </div>
            <div id='nav-btn'>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;