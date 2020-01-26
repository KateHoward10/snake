import React from 'react';
import { Container, Button, QuestionButton, Score } from './styles';

function Controls({ onClick, score, highScore, openInstructions }) {
  return (
    <Container>
      <Button onClick={onClick}>PLAY</Button>
      <Score>Score: {score}</Score>
      <Score>High Score: {highScore}</Score>
      <QuestionButton onClick={openInstructions}>?</QuestionButton>
    </Container>
  );
}

export default Controls;
