import React, { useState } from 'react';
import './RoomPreview.css';

const RoomPreview = ({ dimensions = {}, wallImages = {} }) => {
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
        <div
          className="wall front"
          style={{
            height: `${height}px`,
            width: `${length}px`,
            backgroundImage: wallImages.front ? `url(${wallImages.front})` : 'none',
          }}
        ></div>
        <div
          className="wall back"
          style={{
            height: `${height}px`,
            width: `${length}px`,
            backgroundImage: wallImages.back ? `url(${wallImages.back})` : 'none',
          }}
        ></div>
        <div
          className="wall left"
          style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundImage: wallImages.left ? `url(${wallImages.left})` : 'none',
          }}
        ></div>
        <div
          className="wall right"
          style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundImage: wallImages.right ? `url(${wallImages.right})` : 'none',
          }}
        ></div>
        <div className="wall top"></div>
        <div className="wall bottom"></div>
      </div>
    </div>
  );
};

export default RoomPreview;