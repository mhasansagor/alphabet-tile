import React, { useState } from 'react';
import './App.css';
import AlphabetGrid from './component/AlphabetGrid';

function App() {
  const [outputString, setOutputString] = useState('');
  const handleTileClick = (letter) => {
    let newString = outputString + letter;

    // Replace consecutive letters
    newString = newString.replace(/(.)\1{2,}/g, (match) => '_'.repeat(1));

    setOutputString(newString);
  };
  return (
    <div className="App">
      <h1>Alphabet Grid</h1>
      <AlphabetGrid onTileClick={handleTileClick} />
      <div id="outputString"><span>outputString: </span>{outputString}</div>
    </div>
  );
}

export default App;
