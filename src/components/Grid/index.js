import React from 'react';
import { Container, Cell, Body, Eye, Pupil } from './styles';

function Grid({ snake, food, foodPosition, direction }) {
	function getHeadDirection() {
		function getHeadFacing() {
			switch (snake[snake.length - 1] - snake[snake.length - 2]) {
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
		switch (direction) {
			case 'right':
				if (snake[snake.length - 1] % 17 !== 0) {
					return getHeadFacing();
				}
				return direction;
			case 'left':
				if (snake[snake.length - 1] % 17 !== 16) {
					return getHeadFacing();
				}
				return direction;
			case 'down':
				if (snake[snake.length - 1] > 16) {
					return getHeadFacing();
				}
				return direction;
			case 'up':
				if (snake[snake.length - 1] < 272) {
					return getHeadFacing();
				}
				return direction;
			default:
				return direction;
		}
	}

	function getTailDirection() {
		switch (snake[1] - snake[0]) {
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

	return (
		<Container>
			{Array.from(Array(289).keys()).map(number => (
				<Cell key={number} number={number}>
					{snake.includes(number) ? (
						<Body
							isHead={snake[snake.length - 1] === number}
							isTail={snake[0] === number}
							headDirection={getHeadDirection()}
							tailDirection={getTailDirection()}
						>
							{snake[snake.length - 1] === number && (
								<React.Fragment>
									<Eye headDirection={getHeadDirection()}>
										<Pupil />
									</Eye>
									<Eye headDirection={getHeadDirection()}>
										<Pupil />
									</Eye>
								</React.Fragment>
							)}
						</Body>
					) : (
						number === foodPosition && food
					)}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
