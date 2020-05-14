import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import { getDirection, checkIfCorner, getHeadDirection } from '../../helpers';
import { Container, Cell, Head, Body, Tail, Eye, Pupil } from './styles';

function Grid({ snake, food, foodPosition, direction, tailAppearing }) {
	const [tailOpacity, setTailOpacity] = useState(1);
	const [fadeInterval, setFadeInterval] = useState(null);

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
						<Head direction={getHeadDirection(direction, snake[snake.length - 1], snake[snake.length - 2])}>
							<Eye direction={getHeadDirection(direction, snake[snake.length - 1], snake[snake.length - 2])}>
								<Pupil />
							</Eye>
							<Eye direction={getHeadDirection(direction, snake[snake.length - 1], snake[snake.length - 2])}>
								<Pupil />
							</Eye>
						</Head>
					) : snake[0] === number ? (
						<Tail direction={getDirection(snake[1], snake[0])} opacity={tailOpacity} />
					) : snake.includes(number) ? (
						<Body corner={() => checkIfCorner(snake, number)} />
					) : (
						number === foodPosition && food
					)}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
