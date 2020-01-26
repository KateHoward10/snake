import React from 'react';
import { Overlay, Container, Button } from './styles';

function Instructions({ onClose }) {
  return (
    <Overlay>
      <Container>
        <h2>How to Play</h2>
        <ul>
          <li>The aim of the game is to eat as many items of food as possible without bumping into yourself.</li>
          <li>
            Press Play to start moving, and to change direction use keyboard arrow keys, or the buttons at the bottom of
            your screen if playing on mobile.
          </li>
          <li>
            When you eat a fruit, a new one will appear somewhere else on the grid, your tail will get longer, and your
            speed will increase.
          </li>
          <li>
            If you reach the edge of the grid, the laws of physics will cease to apply and your head will reappear on
            the opposite side. This can be a good way to avoid bumping into your own tail.
          </li>
        </ul>
        <Button onClick={onClose}>Close</Button>
      </Container>
    </Overlay>
  );
}

export default Instructions;
