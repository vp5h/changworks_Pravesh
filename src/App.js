import { GlobalHotKeys } from 'react-hotkeys';
import React from 'react';
import './style.css';
import confetti from 'canvas-confetti';
const keyMap = {
  changworks: 'c h a n g w o r k s',
};

const handlers = {
  changworks() {
    confetti({
      particleCount: 500,
      angle: 70,
      spread: 360,
      origin: { x: 0.5 },
    });
  },
};
const App = () => {
  return (
    <div className="App">
      <GlobalHotKeys className="container" keyMap={keyMap} handlers={handlers}>
        <div className="changworks">Changworks</div>
        <p>🚀🚀Type changworks, It really does work🚀🚀</p>
        <p>P.S. Use small case</p>
      </GlobalHotKeys>
    </div>
  );
};

export default App;
