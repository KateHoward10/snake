import React, { useState, useEffect, useCallback } from 'react';
import useInterval from './hooks/useInterval';
import { useCookies } from 'react-cookie';
import Controls from './components/Controls';
import Grid from './components/Grid';
import Arrows from './components/Arrows';
import GameOver from './components/GameOver';
import './App.css';

function App() {
  const originalSnake = [137, 138, 139, 140];
  const [snake, setSnake] = useState(originalSnake);
  const [direction, setDirection] = useState('right');
  const [interval, setInterval] = useState(null);
  const [score, setScore] = useState(0);
  const [cookies, setCookie] = useCookies(['highScore']);
  const [highScore, setHighScore] = useState(cookies.highScore || 0);
  const [tailAppearing, setTailAppearing] = useState(false);
  const [gameOver, toggleGameOver] = useState(false);
  const [corners, setCorners] = useState([]);
  const [foodPosition, setFoodPosition] = useState(null);
  const [food, setFood] = useState(null);
  const foodArray = ['🍎', '🍏', '🍓', '🥭', '🍐', '🍌', '🍅', '🥕', '🥔', '🥬'];

  function startGame() {
    setFood(foodArray[Math.floor(Math.random() * foodArray.length)]);
    setFoodPosition(getFoodPosition());
    setInterval(500);
  }

  const getFoodPosition = useCallback(() => {
    const first = Math.floor(Math.random() * 289);
    return snake.includes(first) ? getFoodPosition() : first;
  }, [snake]);

  function turn({ key }) {
    if (key.indexOf('Arrow') === 0) {
      const newDirection = key.replace('Arrow', '').toLowerCase();
      const corner = {
        index: snake[snake.length - 1],
        prev: direction,
        next: newDirection
      };
      setDirection(newDirection);
      setCorners([...corners.filter(corner => snake.includes(corner.index)), corner]);
    }
  }

  function getNewSnake() {
    snake.shift();
    switch (direction) {
      case 'right':
        if (snake[snake.length - 1] % 17 === 16) {
          return [...snake, snake[snake.length - 1] - 16];
        }
        return [...snake, snake[snake.length - 1] + 1];
      case 'left':
        if (snake[snake.length - 1] % 17 === 0) {
          return [...snake, snake[snake.length - 1] + 16];
        }
        return [...snake, snake[snake.length - 1] - 1];
      case 'down':
        if (272 <= snake[snake.length - 1] && snake[snake.length - 1] <= 288) {
          return [...snake, snake[snake.length - 1] - 272];
        }
        return [...snake, snake[snake.length - 1] + 17];
      case 'up':
        if (0 <= snake[snake.length - 1] && snake[snake.length - 1] <= 16) {
          return [...snake, snake[snake.length - 1] + 272];
        }
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
      setTailAppearing(true);
      setFood(foodArray[Math.floor(Math.random() * foodArray.length)]);
      setFoodPosition(getFoodPosition());
      setScore(score + 10);
      setInterval(interval * 0.98);
      // If you bump into yourself
    } else if (snake.slice(0, snake.length - 1).includes(snake[snake.length - 1])) {
      setSnake(originalSnake);
      setDirection('right');
      setInterval(null);
      setFoodPosition(null);
      if (score > highScore) {
        setHighScore(score);
        setCookie('highScore', score);
      }
      setScore(0);
      toggleGameOver(true);
    } else {
      setTailAppearing(false);
    }
  }, [
    snake,
    foodPosition,
    setFoodPosition,
    getFoodPosition,
    setSnake,
    score,
    highScore,
    setScore,
    interval,
    setInterval,
    cookies,
    setCookie,
    foodArray,
    originalSnake
  ]);

  return (
    <div className="App" role="button" tabIndex="0" onKeyDown={turn}>
      <div>
        <Controls onClick={startGame} score={score} highScore={highScore} />
        <Grid
          snake={snake}
          food={food}
          foodPosition={foodPosition}
          direction={direction}
          tailAppearing={tailAppearing}
          corners={corners}
        />
        <Arrows onClick={turn} />
        <GameOver visible={gameOver} onClick={() => toggleGameOver(false)} />
      </div>
    </div>
  );
}

export default App;
