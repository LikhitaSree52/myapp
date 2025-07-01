import React from 'react';
import '../styles/App.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Room Customizer 🏠</h1>
      <p>Design your space with your own images and room dimensions.</p>
      <button className="start-button" onClick={onStart}>
        Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen;