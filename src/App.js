import React, { useState, useEffect, useCallback } from 'react';
import useInterval from './hooks/useInterval';
import { originalSnake, getRandomFood, getFoodPosition, getNewSnake } from './helpers';
import Controls from './components/Controls';
import Grid from './components/Grid';
import Arrows from './components/Arrows';
import GameOver from './components/GameOver';
import Instructions from './components/Instructions';
import './App.css';

function App() {
  const [snake, setSnake] = useState(originalSnake());
  const [direction, setDirection] = useState('right');
  const [interval, setInterval] = useState(null);
  const [score, setScore] = useState(0);
  const [instructions, toggleInstructions] = useState(false);
  const [tailAppearing, setTailAppearing] = useState(false);
  const [gameOver, toggleGameOver] = useState(false);
  const [foodPosition, setFoodPosition] = useState(null);
  const [food, setFood] = useState(null);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);

  function startGame() {
    setSnake(originalSnake());
    setDirection('right');
    setScore(0);
    setFood(getRandomFood());
    setFoodPosition(getFoodPosition(snake));
    setInterval(500);
  }

  function turn({ key }) {
    if (key.indexOf('Arrow') === 0) {
      const newDirection = key.replace('Arrow', '').toLowerCase();
      setDirection(newDirection);
    } else {
      return;
    }
  }

  const checkPosition = useCallback((snake) => {
    // If you eat the food
    if (snake[snake.length - 1] === foodPosition) {
      setSnake([snake[0] - (snake[1] - snake[0] * -1), ...snake]);
      setTailAppearing(true);
      setFood(getRandomFood());
      setFoodPosition(getFoodPosition(snake));
      setScore(score + 10);
      setInterval(i => i * 0.98);
      // If you bump into yourself
    } else if (snake.slice(0, snake.length - 1).includes(snake[snake.length - 1])) {
      setSnake(originalSnake());
      setDirection('right');
      setInterval(null);
      setFoodPosition(null);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
      setScore(0);
      toggleGameOver(true);
    } else {
      setTailAppearing(false);
    }
  }, [foodPosition, score, highScore]);

  useInterval(() => {
    const newSnake = getNewSnake(snake, direction);
    setSnake(newSnake);
  }, interval);

  useEffect(() => checkPosition(snake), [snake, checkPosition]);

  return (
    <div className="game" role="button" tabIndex="0" onKeyDown={turn}>
      {instructions && <Instructions onClose={() => toggleInstructions(false)} />}
      <div>
        <Controls
          onClick={startGame}
          score={score}
          highScore={highScore}
          openInstructions={() => toggleInstructions(true)}
        />
        <Grid
          snake={snake}
          food={food}
          foodPosition={foodPosition}
          direction={direction}
          tailAppearing={tailAppearing}
        />
        <Arrows onClick={turn} />
        {gameOver && <GameOver onClose={() => toggleGameOver(false)} />}
      </div>
    </div>
  );
}

export default App;
