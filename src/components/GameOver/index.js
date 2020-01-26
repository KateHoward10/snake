import React from 'react';
import { Overlay, Container, Text, Button } from './styles';

function GameOver({ onClose }) {
	return (
		<Overlay>
			<Container>
				<Text>
					Game over!{' '}
					<span role="img" aria-label="snake">
						🐍
					</span>
				</Text>
				<Button onClick={onClose}>Close</Button>
			</Container>
		</Overlay>
	);
}

export default GameOver;
