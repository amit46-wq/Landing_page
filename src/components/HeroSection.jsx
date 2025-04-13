import React from 'react';
import heroimg from './img1.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Struggling to Stay Consistent?</h1>
          <h2>Feeling Lost?</h2>
          <p>
            Transform your life with proven strategies, powerful communities, and personalized growth paths.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroimg} alt="Personal Growth" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
