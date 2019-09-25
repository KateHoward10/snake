import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import { Container, Cell, Head, Body, Tail, Eye, Pupil } from './styles';

function Grid({ snake, food, foodPosition, direction, tailAppearing, corners }) {
	const [tailOpacity, setTailOpacity] = useState(1);
	const [fadeInterval, setFadeInterval] = useState(null);

	function getNormalDirection(firstPos, secondPos) {
		switch (firstPos - secondPos) {
			case 1:
				return 'right';
			case -1:
				return 'left';
			case 17:
				return 'down';
			case -17:
				return 'up';
			default:
				return;
		}
	}

	function checkIfCorner(number) {
		const corner = corners.find(corner => corner.index === number);
		if (!corner) return;
		if ((corner.prev === 'right' && corner.next === 'down') || (corner.prev === 'up' && corner.next === 'left')) {
			return 'top-right';
		} else if (
			(corner.prev === 'up' && corner.next === 'right') ||
			(corner.prev === 'left' && corner.next === 'down')
		) {
			return 'top-left';
		} else if (
			(corner.prev === 'down' && corner.next === 'left') ||
			(corner.prev === 'right' && corner.next === 'up')
		) {
			return 'bottom-right';
		} else if (
			(corner.prev === 'left' && corner.next === 'up') ||
			(corner.prev === 'down' && corner.next === 'right')
		) {
			return 'bottom-left';
		}
		return null;
	}

	function getDirection(index, prevIndex) {
		if (
			(direction === 'right' && snake[index] % 17 !== 0) ||
			(direction === 'left' && snake[index] % 17 !== 16) ||
			(direction === 'down' && snake[index] > 16) ||
			(direction === 'up' && snake[index] < 272)
		) {
			return getNormalDirection(snake[index], snake[prevIndex]);
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
						<Head direction={getDirection(snake.length - 1, snake.length - 2)}>
							<Eye direction={getDirection(snake.length - 1, snake.length - 2)}>
								<Pupil />
							</Eye>
							<Eye direction={getDirection(snake.length - 1, snake.length - 2)}>
								<Pupil />
							</Eye>
						</Head>
					) : snake[0] === number ? (
						<Tail direction={getNormalDirection(snake[1], snake[0])} opacity={tailOpacity} />
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
