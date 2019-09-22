import React, { useState, useEffect, useCallback } from 'react';
import Grid from './components/Grid';
import './App.css';
import useInterval from './hooks/useInterval';

function App() {
  const [snake, setSnake] = useState([137, 138, 139, 140]);
  const [direction, setDirection] = useState('ArrowRight');
  const [interval, setInterval] = useState(null);
  const [foodPosition, setFoodPosition] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function startGame() {
    setFoodPosition(getFoodPosition());
    setInterval(500);
  }

  const getFoodPosition = useCallback(() => {
    const first = Math.floor(Math.random() * 289);
    return snake.includes(first) ? Math.floor(Math.random() * 289) : first;
  }, [snake]);

  function turn({ key }) {
    setDirection(key);
  }

  function getNewSnake() {
    snake.shift();
    switch (direction) {
      case 'ArrowRight':
        return [...snake, snake[snake.length - 1] + 1];
      case 'ArrowLeft':
        return [...snake, snake[snake.length - 1] - 1];
      case 'ArrowDown':
        return [...snake, snake[snake.length - 1] + 17];
      case 'ArrowUp':
        return [...snake, snake[snake.length - 1] - 17];
      default:
        return snake;
    }
  }

  useInterval(() => {
    const newSnake = getNewSnake();
    setSnake(newSnake);
  }, interval);

  useEffect(() => {
    // If you eat the food
    if (snake[snake.length - 1] === foodPosition) {
      setSnake([snake[0] - (snake[1] - snake[0] * -1), ...snake]);
      setFoodPosition(getFoodPosition());
      setScore(score + 10);
      setInterval(interval * 0.98);
      // If you bump into yourself
    } else if (snake.slice(0, snake.length - 1).includes(snake[snake.length - 1])) {
      setSnake([137, 138, 139, 140]);
      setDirection('ArrowRight');
      setInterval(null);
      setFoodPosition(null);
      setHighScore(score);
      setScore(0);
    }
  }, [snake, foodPosition, setFoodPosition, getFoodPosition, setSnake, score, setScore, interval, setInterval]);

  return (
    <div className="App" role="button" tabIndex="0" onKeyDown={turn}>
      <div className="controls">
        <button onClick={startGame}>Play</button>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <Grid snake={snake} foodPosition={foodPosition} />
    </div>
  );
}

export default App;
