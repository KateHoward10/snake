import React from 'react';
import { Container, Row, Button } from './styles';

function Arrows({ onClick }) {
	return (
		<Container>
			<Row>
				<Button onClick={() => onClick({ key: 'ArrowUp' })}>↑</Button>
			</Row>
			<Row>
				<Button onClick={() => onClick({ key: 'ArrowLeft' })}>←</Button>
				<Button onClick={() => onClick({ key: 'ArrowDown' })}>↓</Button>
				<Button onClick={() => onClick({ key: 'ArrowRight' })}>→</Button>
			</Row>
		</Container>
	);
}

export default Arrows;
