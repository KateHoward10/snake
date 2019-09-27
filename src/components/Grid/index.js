import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import { Container, Cell, Head, Body, Tail, Eye, Pupil } from './styles';

function Grid({ snake, food, foodPosition, direction, tailAppearing }) {
	const [tailOpacity, setTailOpacity] = useState(1);
	const [fadeInterval, setFadeInterval] = useState(null);

	function getDirection(firstPos, secondPos) {
		switch (firstPos - secondPos) {
			case 1:
				return 'right';
			case -1:
				return 'left';
			case 17:
				return 'down';
			case -17:
				return 'up';
			case -16:
				return 'right';
			case 16:
				return 'left';
			case -272:
				return 'down';
			case 272:
				return 'up';
			default:
				return;
		}
	}

	function checkIfCorner(number) {
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
	}

	function getHeadDirection(index, prevIndex) {
		if (
			(direction === 'right' && snake[index] % 17 !== 0) ||
			(direction === 'left' && snake[index] % 17 !== 16) ||
			(direction === 'down' && snake[index] > 16) ||
			(direction === 'up' && snake[index] < 272)
		) {
			return getDirection(snake[index], snake[prevIndex]);
		} else {
			return direction;
		}
	}

	useInterval(() => {
		if (tailOpacity < 1) setTailOpacity(tailOpacity + 0.1);
	}, fadeInterval);

	useEffect(() => {
		if (tailAppearing) {
			setTailOpacity(0);
			setFadeInterval(100);
		}
	}, [tailAppearing]);

	return (
		<Container>
			{Array.from(Array(289).keys()).map(number => (
				<Cell key={number} number={number}>
					{snake[snake.length - 1] === number ? (
						<Head direction={getHeadDirection(snake.length - 1, snake.length - 2)}>
							<Eye direction={getHeadDirection(snake.length - 1, snake.length - 2)}>
								<Pupil />
							</Eye>
							<Eye direction={getHeadDirection(snake.length - 1, snake.length - 2)}>
								<Pupil />
							</Eye>
						</Head>
					) : snake[0] === number ? (
						<Tail direction={getDirection(snake[1], snake[0])} opacity={tailOpacity} />
					) : snake.includes(number) ? (
						<Body corner={() => checkIfCorner(number)} />
					) : (
						number === foodPosition && food
					)}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
