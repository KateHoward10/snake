import React, { useState } from 'react';
import Grid from './components/Grid';
import './App.css';

function App() {
  const [cells, setCells] = useState([137, 138, 139, 140]);

  return (
    <div className="App">
      <Grid cells={cells} />
    </div>
  );
}

export default App;
