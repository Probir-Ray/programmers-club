import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <a href="/"><img src="https://i.imgur.com/aX2M57S.png" alt="" /></a>
            </div>
            <h2>Programmers Club</h2>
            <h3>Any fool can write code that a computer can understand. <br/>Good programmers write code that humans can understand.</h3>
            <p>Total Budget: $ 8.9 Lac</p>
            
            {/* Navigation */}
            <nav>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;