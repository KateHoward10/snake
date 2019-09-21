import React, { useState } from 'react';
import Grid from './components/Grid';
import './App.css';
import useInterval from './hooks/useInterval';

function App() {
  const [cells, setCells] = useState([137, 138, 139, 140]);
  const [direction, setDirection] = useState('ArrowRight');

  function turn({ key }) {
    setDirection(key);
  }

  useInterval(() => {
    const last = cells.shift();
    const newCells = [...cells, cells[cells.length - 1] + 1];
    setCells(newCells);
  }, 500);

  return (
    <div className="App" role="button" tabIndex="0" onKeyDown={turn}>
      <Grid cells={cells} />
    </div>
  );
}

export default App;
