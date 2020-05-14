export const originalSnake = () => [137, 138, 139, 140];

const foodArray = ['🍎', '🍏', '🍓', '🥭', '🍐', '🍌', '🍅', '🥕', '🥔', '🥬'];

export const getRandomFood = () => {
  return foodArray[Math.floor(Math.random() * foodArray.length)];
};

export const getFoodPosition = (snake) => {
  const first = Math.floor(Math.random() * 289);
  return snake.includes(first) ? getFoodPosition(snake) : first;
};

export function getNewSnake(snake, direction) {
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
};

export function getDirection(firstPos, secondPos) {
  switch (firstPos - secondPos) {
    case 1:
    case -16:
      return 'right';
    case -1:
    case 16:
      return 'left';
    case 17:
    case -272:
      return 'down';
    case -17:
    case 272:
      return 'up';
    default:
      return;
  }
};

export function checkIfCorner(snake, number) {
  const index = snake.indexOf(number);
  const prev = snake[index - 1];
  const next = snake[index + 1];
  if (
    (getDirection(number, prev) === 'right' && getDirection(next, number) === 'down') ||
    (getDirection(number, prev) === 'up' && getDirection(next, number) === 'left')
  ) {
    return 'top-right';
  } else if (
    (getDirection(number, prev) === 'up' && getDirection(next, number) === 'right') ||
    (getDirection(number, prev) === 'left' && getDirection(next, number) === 'down')
  ) {
    return 'top-left';
  } else if (
    (getDirection(number, prev) === 'down' && getDirection(next, number) === 'left') ||
    (getDirection(number, prev) === 'right' && getDirection(next, number) === 'up')
  ) {
    return 'bottom-right';
  } else if (
    (getDirection(number, prev) === 'left' && getDirection(next, number) === 'up') ||
    (getDirection(number, prev) === 'down' && getDirection(next, number) === 'right')
  ) {
    return 'bottom-left';
  }
  return null;
};

export function getHeadDirection(direction, pos, prev) {
  if (
    (direction === 'right' && pos % 17 !== 0) ||
    (direction === 'left' && pos % 17 !== 16) ||
    (direction === 'down' && pos > 16) ||
    (direction === 'up' && pos < 272)
  ) {
    return getDirection(pos, prev);
  } else {
    return direction;
  }
};