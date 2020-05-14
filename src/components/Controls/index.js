import React from 'react';
import { Container, Button, QuestionButton, Score } from './styles';

const Controls = ({ onClick, score, highScore, openInstructions }) => (
  <Container>
    <Button onClick={onClick}>PLAY</Button>
    <Score>Score: {score}</Score>
    <Score>High Score: {highScore}</Score>
    <QuestionButton onClick={openInstructions}>?</QuestionButton>
  </Container>
);

export default Controls;
