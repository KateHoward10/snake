import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import { Container, Cell, Head, Body, Tail, Eye, Pupil } from './styles';

function Grid({ snake, food, foodPosition, direction, tailAppearing }) {
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

	function getHeadDirection() {
		if (
			(direction === 'right' && snake[snake.length - 1] % 17 !== 0) ||
			(direction === 'left' && snake[snake.length - 1] % 17 !== 16) ||
			(direction === 'down' && snake[snake.length - 1] > 16) ||
			(direction === 'up' && snake[snake.length - 1] < 272)
		) {
			return getNormalDirection(snake[snake.length - 1], snake[snake.length - 2]);
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
						<Head direction={getHeadDirection()}>
							<Eye direction={getHeadDirection()}>
								<Pupil />
							</Eye>
							<Eye direction={getHeadDirection()}>
								<Pupil />
							</Eye>
						</Head>
					) : snake[0] === number ? (
						<Tail direction={getNormalDirection(snake[1], snake[0])} opacity={tailOpacity} />
					) : snake.includes(number) ? (
						<Body />
					) : (
						number === foodPosition && food
					)}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
