import React, { useState } from 'react';

// Box component represents a single box with a background color
function Box({ color, changed }) {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        margin: '10px',
        display: 'inline-block',
        position: 'relative',
      }}
    >
      {changed && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Changed!</div>}
    </div>
  );
}

// BoxContainer component contains multiple instances of the Box component
function BoxContainer({ colors, numBoxes }) {
  const [boxColors, setBoxColors] = useState(Array.from({ length: numBoxes }, getRandomColor));
  const [changedBox, setChangedBox] = useState(null);

  // Function to change the color of a random box
  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * boxColors.length);
    const newColors = [...boxColors];
    newColors[randomIndex] = getRandomColor(); // Get a new random color
    setBoxColors(newColors);
    setChangedBox(randomIndex);
  };

  // Function to generate a random color
  function getRandomColor() {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    return colors[randomColorIndex];
  }

  return (
    <div>
      {boxColors.map((color, index) => (
        <Box key={index} color={color} changed={index === changedBox} />
      ))}
      <button onClick={changeColor}>Change</button>
    </div>
  );
}

// Default properties
BoxContainer.defaultProps = {
  colors: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'], // Possible colors list
  numBoxes: 16, // Number of boxes
};

// App component renders the BoxContainer component
function App() {
  return (
    <div>
      <BoxContainer />
    </div>
  );
}

export default App;
