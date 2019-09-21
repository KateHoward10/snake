import React from 'react';
import { Container, Cell } from './styles';

function Grid(props) {
	return (
		<Container>
			{Array.from(Array(289).keys()).map(number => (
				<Cell key={number} number={number} />
			))}
		</Container>
	);
}

export default Grid;
