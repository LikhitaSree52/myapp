import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import RoomPreview from './RoomPreview';
import '../styles/App.css';

const RoomLayout = () => {
  const [dimensions, setDimensions] = useState({ length: 300, width: 300, height: 300 });
  const [unit, setUnit] = useState('px');
  const [wallImages, setWallImages] = useState({ front: [], back: [], left: [], right: [] });
  const [showPanel, setShowPanel] = useState(true);

  return (
    <div className="room-layout">
      <div className="top-bar">
        <button onClick={() => setShowPanel((prev) => !prev)} className="toggle-btn">
          {showPanel ? '❌ Hide Panel' : '☰ Show Panel'}
        </button>
      </div>
      <div className="content">
        {showPanel && (
          <div className="left-panel">
            <ControlPanel
              dimensions={dimensions}
              setDimensions={setDimensions}
              wallImages={wallImages}
              setWallImages={setWallImages}
              unit={unit}
              setUnit={setUnit}
            />
          </div>
        )}
        <div className="right-panel">
          <RoomPreview dimensions={dimensions} wallImages={wallImages} unit={unit} />
        </div>
      </div>
    </div>
  );
};

export default RoomLayout;
