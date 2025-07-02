import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Welcome to Room Customizer</h1>
      <button onClick={onStart} style={{ fontSize: '18px', padding: '10px 20px' }}>
        Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen;