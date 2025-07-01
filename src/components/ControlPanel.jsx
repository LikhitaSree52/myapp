import React from 'react';

const ControlPanel = ({ dimensions, setDimensions }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Control Panel</h3>
      <label>
        Length:
        <input
          type="number"
          name="length"
          value={dimensions.length}
          onChange={handleChange}
          placeholder="in feet"
        />
      </label>
      <br />
      <label>
        Width:
        <input
          type="number"
          name="width"
          value={dimensions.width}
          onChange={handleChange}
          placeholder="in feet"
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="number"
          name="height"
          value={dimensions.height}
          onChange={handleChange}
          placeholder="in feet"
        />
      </label>
    </div>
  );
};

export default ControlPanel;
