import React, { useState } from 'react';
import Grid from './components/Grid';
import './App.css';
import useInterval from './hooks/useInterval';

function App() {
  const [cells, setCells] = useState([137, 138, 139, 140]);
  const [direction, setDirection] = useState('ArrowRight');

  function turn({ key }) {
    console.log(key);
    setDirection(key);
  }

  function getNewCells() {
    cells.shift();
    switch (direction) {
      case 'ArrowRight':
        return [...cells, cells[cells.length - 1] + 1];
      case 'ArrowLeft':
        return [...cells, cells[cells.length - 1] - 1];
      case 'ArrowDown':
        return [...cells, cells[cells.length - 1] + 17];
      case 'ArrowUp':
        return [...cells, cells[cells.length - 1] - 17];
      default:
        return cells;
    }
  }

  useInterval(() => {
    const newCells = getNewCells();
    setCells(newCells);
  }, 500);

  return (
    <div className="App" role="button" tabIndex="0" onKeyDown={turn}>
      <Grid cells={cells} />
    </div>
  );
}

export default App;
