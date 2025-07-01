import React from 'react';
import ControlPanel from './ControlPanel';
import RoomPreview from './RoomPreview';
import '../styles/App.css'; 

const RoomLayout = () => {
  return (
    <div className="room-layout">
      <div className="left-panel">
        <ControlPanel />
      </div>
      <div className="right-panel">
        <RoomPreview />
      </div>
    </div>
  );
};

export default RoomLayout;
