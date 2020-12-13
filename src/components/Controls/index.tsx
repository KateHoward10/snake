import React from 'react';
import { Container, Button, QuestionButton, Score } from './styles';

interface Props {
  onClick: () => void,
  score: number,
  highScore: number,
  openInstructions: () => void
}
const Controls: React.FC<Props> = ({ onClick, score, highScore, openInstructions }) => (
  <Container>
    <Button onClick={onClick}>PLAY</Button>
    <Score>Score: {score}</Score>
    <Score>High Score: {highScore}</Score>
    <QuestionButton onClick={openInstructions}>?</QuestionButton>
  </Container>
);


export default Controls;
