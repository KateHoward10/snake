import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(17, 30px);
	grid-template-columns: repeat(17, 30px);
`;

export const Cell = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(50, 168, 82, ${props => (props.number % 2 === 0 ? 0.8 : 0.5)});
	font-size: 24px;
`;

export const Body = styled.div`
	width: ${props => (props.isHead ? 28 : 24)}px;
	height: ${props => (props.isHead ? 28 : 24)}px;
	border-radius: 50%;
	background-color: blue;
	display: flex;
	flex-direction: ${props => (props.isVertical ? 'row' : 'column')};
	align-items: center;
	justify-content: space-around;
`;

export const Eye = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Pupil = styled.div`
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background-color: black;
`;
