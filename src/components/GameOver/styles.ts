import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  padding: 20px;
  border-radius: 10px;
`;

export const Text = styled.h1`
  color: white;
  margin-top: 0;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 5px;
  background-color: orange;
  border: 4px solid orange;
  border-radius: 10px;
  font-size: 18px;
`;
