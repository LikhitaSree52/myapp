import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import RoomPreview from './RoomPreview';
import '../styles/App.css';

const RoomLayout = () => {
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [wallImages, setWallImages] = useState({ front: null, back: null, left: null, right: null });
  const [showPanel, setShowPanel] = useState(true);

  return (
    <div className="room-layout">
      {showPanel && (
        <div className="left-panel">
          <ControlPanel
            dimensions={dimensions}
            setDimensions={setDimensions}
            wallImages={wallImages}
            setWallImages={setWallImages}
          />
        </div>
      )}
      <div className="right-panel">
        <button onClick={() => setShowPanel((prev) => !prev)}>
          {showPanel ? 'Hide Controls' : 'Show Controls'}
        </button>
        <RoomPreview dimensions={dimensions} wallImages={wallImages} />
      </div>
    </div>
  );
};

export default RoomLayout;