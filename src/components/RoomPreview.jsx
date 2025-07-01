import React from 'react';

const RoomPreview = ({ dimensions }) => {
  return (
    <div>
      <h3>Room Preview</h3>
      <p>Length: {dimensions.length} ft</p>
      <p>Width: {dimensions.width} ft</p>
      <p>Height: {dimensions.height} ft</p>
    </div>
  );
};

export default RoomPreview;
