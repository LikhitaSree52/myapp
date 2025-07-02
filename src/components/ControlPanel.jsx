import React, { useState } from 'react';

const ControlPanel = ({ dimensions, setDimensions, wallImages, setWallImages }) => {
  const [selectedWall, setSelectedWall] = useState('front');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({ ...prev, [name]: value }));
  };

  const handleWallChange = (e) => {
    setSelectedWall(e.target.value);
  };

  const handleImageUpload = () => {
    if (imageUrl && selectedWall) {
      setWallImages((prev) => ({ ...prev, [selectedWall]: imageUrl }));
      setImageUrl('');
    }
  };

  return (
    <div>
      <h3>Control Panel</h3>

      <label>Length (px):
        <input type="number" name="length" value={dimensions.length} onChange={handleChange} />
      </label><br />

      <label>Width (px):
        <input type="number" name="width" value={dimensions.width} onChange={handleChange} />
      </label><br />

      <label>Height (px):
        <input type="number" name="height" value={dimensions.height} onChange={handleChange} />
      </label><br /><br />

      <label>Select Wall:
        <select value={selectedWall} onChange={handleWallChange}>
          <option value="front">Front</option>
          <option value="back">Back</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </label><br />

      <label>Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
        />
      </label>
      <button onClick={handleImageUpload}>Apply Image</button>
    </div>
  );
};

export default ControlPanel;
