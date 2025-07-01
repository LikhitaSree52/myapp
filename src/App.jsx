import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RoomLayout from './components/RoomLayout';
import './styles/App.css';

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {started ? (
        <RoomLayout />
      ) : (
        <WelcomeScreen onStart={() => setStarted(true)} />
      )}
    </div>
  );
};

export default App;
