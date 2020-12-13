import styled, { css } from 'styled-components';

const dots = `
  background-color: blue;
  background-image: radial-gradient(darkblue 15%, transparent 16%),
  radial-gradient(darkblue 15%, transparent 16%);
  background-size: 15px 15px;
  background-position: 0 0, 7.5px 7.5px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(17, 30px);
  grid-template-columns: repeat(17, 30px);
  margin: 5px;
  @media screen and (max-width: 600px) {
    grid-template-rows: repeat(17, 5vw);
    grid-template-columns: repeat(17, 5vw);
  }
`;

type CellProps = {
  number: number
}

export const Cell = styled.div<CellProps>(({ number }) =>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(50, 168, 82, ${number % 2 === 0 ? 0.8 : 0.5});
  font-size: 24px;
  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`);

type BodyProps = {
  corner?: string|null
}

export const Body = styled.div<BodyProps>(({ corner }) =>`
  width: 30px;
  height: 30px;
  ${dots}
  display: flex;
  ${corner &&
    css`
      border-${corner}-radius: 50%;
    `}
  @media screen and (max-width: 600px) {
    width: 5vw;
    height: 5vw;
  }
`);

type Props = {
  direction: string|null,
  opacity?: number
}

export const Head = styled.div<Props>(({ direction }) =>`
  width: 30px;
  height: 30px;
  ${dots}
  display: flex;
  flex-direction: ${direction === 'up' || direction === 'down' ? 'row' : 'column'};
  border-top-right-radius: ${direction === 'right' || direction === 'up' ? '50%' : 0};
  border-bottom-right-radius: ${direction === 'right' || direction === 'down' ? '50%' : 0};
  border-bottom-left-radius: ${direction === 'left' || direction === 'down' ? '50%' : 0};
  border-top-left-radius: ${direction === 'left' || direction === 'up' ? '50%' : 0};
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    width: 5vw;
    height: 5vw;
  }
`);

export const Tail = styled.div<Props>(({ direction, opacity }) =>`
  width: 30px;
  height: 30px;
  ${dots}
  display: flex;
  border-top-right-radius: ${direction === 'left' || direction === 'down' ? '50%' : 0};
  border-bottom-right-radius: ${direction === 'left' || direction === 'up' ? '50%' : 0};
  border-bottom-left-radius: ${direction === 'right' || direction === 'up' ? '50%' : 0};
  border-top-left-radius: ${direction === 'right' || direction === 'down' ? '50%' : 0};
  opacity: ${opacity};
  @media screen and (max-width: 600px) {
    width: 5vw;
    height: 5vw;
  }
`);

export const Eye = styled.div<Props>(({ direction }) =>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: ${direction === 'down' ? 'flex-end' : direction === 'up' ? 'flex-start' : 'center'};
  justify-content: ${direction === 'right' ? 'flex-end' : direction === 'left' ? 'flex-start' : 'center'};
  @media screen and (max-width: 600px) {
    width: 3px;
    height: 3px;
  }
`);

export const Pupil = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: black;
  @media screen and (max-width: 600px) {
    width: 1px;
    height: 1px;
  }
`;
