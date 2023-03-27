import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Futurum!</h1>
                <p className="hero-subtitle">Your path to success starts here.</p>
                <button className="hero-btn">Join Now</button>
            </div>
        </div>
    );
};

export default Hero;