import React, { useState } from 'react';

const ControlPanel = ({ dimensions, setDimensions, wallImages, setWallImages, unit, setUnit }) => {
  const [selectedWall, setSelectedWall] = useState('front');
  const [imageUrl, setImageUrl] = useState('');

  const convertToPx = (value, unit) => {
    const v = parseFloat(value);
    if (unit === 'm') return v * 100;
    if (unit === 'cm') return v;
    if (unit === 'ft') return v * 30.48;
    return v; // px
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const pxValue = convertToPx(value, unit);
    setDimensions((prev) => ({ ...prev, [name]: pxValue }));
  };

  const handleWallChange = (e) => {
    setSelectedWall(e.target.value);
  };

  const handleImageUpload = () => {
    if (imageUrl && selectedWall) {
      setWallImages((prev) => ({
        ...prev,
        [selectedWall]: [...prev[selectedWall], imageUrl],
      }));
      setImageUrl('');
    }
  };

  return (
    <div>
      <h3>Control Panel</h3>

      <label>Units:
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="px">Pixels</option>
          <option value="cm">Centimeters</option>
          <option value="m">Meters</option>
          <option value="ft">Feet</option>
        </select>
      </label><br /><br />

      <label>Length:
        <input type="number" name="length" onChange={handleChange} placeholder={`Length (${unit})`} />
      </label><br />
      <label>Width:
        <input type="number" name="width" onChange={handleChange} placeholder={`Width (${unit})`} />
      </label><br />
      <label>Height:
        <input type="number" name="height" onChange={handleChange} placeholder={`Height (${unit})`} />
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
      <button onClick={handleImageUpload}>Add Image</button>
    </div>
  );
};

export default ControlPanel;