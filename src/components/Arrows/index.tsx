import React from 'react';
import { Container, Row, Button } from './styles';

interface Props {
  onClick: (e: { key: string }) => void
}

const Arrows: React.FC<Props> = ({ onClick }) => (
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

export default Arrows;
