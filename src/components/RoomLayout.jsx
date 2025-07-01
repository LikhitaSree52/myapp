import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import RoomPreview from './RoomPreview';
import '../styles/App.css';

const RoomLayout = () => {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
  });

  return (
    <div className="room-layout">
      <div className="left-panel">
        <ControlPanel dimensions={dimensions} setDimensions={setDimensions} />
      </div>
      <div className="right-panel">
        <RoomPreview dimensions={dimensions} />
      </div>
    </div>
  );
};

export default RoomLayout;