import React from 'react';
import { Container, Cell, Body, Eye, Pupil } from './styles';

function Grid({ snake, foodPosition }) {
	const isVertical = Math.abs(snake[snake.length - 1] - snake[snake.length - 2]) !== 1;
	return (
		<Container>
			{Array.from(Array(289).keys()).map(number => (
				<Cell key={number} number={number}>
					{snake.includes(number) && (
						<Body isHead={snake[snake.length - 1] === number} isVertical={isVertical}>
							{snake[snake.length - 1] === number && (
								<React.Fragment>
									<Eye>
										<Pupil />
									</Eye>
									<Eye>
										<Pupil />
									</Eye>
								</React.Fragment>
							)}
						</Body>
					)}
					{number === foodPosition && '🍎'}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
