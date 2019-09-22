import React from 'react';
import { Container, Button, Score } from './styles';

function Controls({ onClick, score, highScore }) {
	return (
		<Container>
			<Button onClick={onClick}>PLAY</Button>
			<Score>Score: {score}</Score>
			<Score>High Score: {highScore}</Score>
		</Container>
	);
}

export default Controls;
