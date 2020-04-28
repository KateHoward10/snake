import React from 'react';
import { Container, Text, Button } from './styles';

function Cookies({ onAccept, onReject }) {
  return (
    <Container>
      <Text>This game uses cookies to save your high score, but can function without them. Is this OK with you?</Text>
      <div>
        <Button onClick={onReject}>No thanks</Button>
        <Button onClick={onAccept}>Yep, no problem</Button>
      </div>
    </Container>
  );
}

export default Cookies;
