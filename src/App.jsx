import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RoomLayout from './components/RoomLayout';
import './styles/App.css';

function App() {
  const [started, setStarted] = useState(false);
  return <>{started ? <RoomLayout /> : <WelcomeScreen onStart={() => setStarted(true)} />}</>;
}

export default App;