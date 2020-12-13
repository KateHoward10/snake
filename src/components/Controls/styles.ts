import styled from 'styled-components';

const defaults = `
  margin: 10px;
  border: 2px solid orange;
  font-size: 3vw;
  @media screen and (min-width: 600px) {
    font-size: 18px;
    border-width: 4px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: orange;
  border-radius: 10px;
  font-size: 3vw;
  ${defaults}
  @media screen and (min-width: 600px) {
    width: 64px;
  }
`;

export const QuestionButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-radius: 50%;
  ${defaults}
`;

export const Score = styled.p`
  padding: 5px;
  background-color: transparent;
  border-radius: 10px;
  ${defaults}
`;
