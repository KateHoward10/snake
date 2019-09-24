import React from 'react';
import { Overlay, Container, Text, Button } from './styles';

function GameOver({ visible, onClick }) {
	return (
		<Overlay visible={visible}>
			<Container>
				<Text>
					Game over!{' '}
					<span role="img" aria-label="snake">
						🐍
					</span>
				</Text>
				<Button onClick={onClick}>Close</Button>
			</Container>
		</Overlay>
	);
}

export default GameOver;
