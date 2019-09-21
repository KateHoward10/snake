import React from 'react';
import { Container, Cell, Body } from './styles';

function Grid({ cells }) {
	return (
		<Container>
			{Array.from(Array(289).keys()).map(number => (
				<Cell key={number} number={number}>
					{cells.includes(number) && <Body head={cells[cells.length - 1] === number} />}
				</Cell>
			))}
		</Container>
	);
}

export default Grid;
