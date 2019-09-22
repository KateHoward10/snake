import React from 'react';
import { Container, Cell, Body } from './styles';

function Grid({ snake, foodPosition }) {
	return (
		<Container>
			{Array.from(Array(289).keys()).map(number => (
				<Cell key={number} number={number}>
					{snake.includes(number) && <Body head={snake[snake.length - 1] === number} />}
					{number === foodPosition && '🍎'}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
