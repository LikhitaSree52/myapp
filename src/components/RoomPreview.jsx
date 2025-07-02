import React, { useState } from 'react';
import './RoomPreview.css';

const RoomPreview = ({ dimensions = {}, wallImages = {}, unit }) => {
  const { length = 300, width = 300, height = 300 } = dimensions;
  const [rotation, setRotation] = useState({ x: 10, y: 20 });

  let isDragging = false;
  let startX, startY;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));
    startX = e.clientX;
    startY = e.clientY;
  };

  const handleMouseUp = () => {
    isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="room-preview-container" onMouseDown={handleMouseDown}>
      <div
        className="room-cube"
        style={{
          width: `${length}px`,
          height: `${height}px`,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {['front', 'back', 'left', 'right'].map((wall) => (
          <div
            key={wall}
            className={`wall ${wall}`}
            style={{
              width: wall === 'left' || wall === 'right' ? `${width}px` : `${length}px`,
              height: `${height}px`,
            }}
          >
            {(wallImages[wall] || []).map((url, index) => (
              <img key={index} src={url} className="wall-image" alt={`img-${wall}-${index}`} />
            ))}
          </div>
        ))}
        <div className="wall top" />
        <div className="wall bottom" />
      </div>
    </div>
  );
};

export default RoomPreview;