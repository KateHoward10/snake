import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(17, 30px);
	grid-template-columns: repeat(17, 30px);
	@media screen and (max-width: 600px) {
		grid-template-rows: repeat(17, 5vw);
		grid-template-columns: repeat(17, 5vw);
	}
`;

export const Cell = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(50, 168, 82, ${props => (props.number % 2 === 0 ? 0.8 : 0.5)});
	font-size: 24px;
	@media screen and (max-width: 600px) {
		font-size: 3vw;
	}
`;

export const Body = styled.div`
	width: 30px;
	height: 30px;
	background-color: blue;
	display: flex;
	${props =>
		props.corner &&
		css`
			border-${props.corner}-radius: 50%;
		`}
	@media screen and (max-width: 600px) {
		width: 5vw;
		height: 5vw;
	}
`;

export const Head = styled.div`
	width: 30px;
	height: 30px;
	background-color: blue;
	display: flex;
	flex-direction: ${props => (props.direction === 'up' || props.direction === 'down' ? 'row' : 'column')};
	border-top-right-radius: ${props => (props.direction === 'right' || props.direction === 'up' ? '50%' : 0)};
	border-bottom-right-radius: ${props => (props.direction === 'right' || props.direction === 'down' ? '50%' : 0)};
	border-bottom-left-radius: ${props => (props.direction === 'left' || props.direction === 'down' ? '50%' : 0)};
	border-top-left-radius: ${props => (props.direction === 'left' || props.direction === 'up' ? '50%' : 0)};
	align-items: center;
	justify-content: space-around;
	@media screen and (max-width: 600px) {
		width: 5vw;
		height: 5vw;
	}
`;

export const Tail = styled.div`
	width: 30px;
	height: 30px;
	background-color: blue;
	display: flex;
	border-top-right-radius: ${props => (props.direction === 'left' || props.direction === 'down' ? '50%' : 0)};
	border-bottom-right-radius: ${props => (props.direction === 'left' || props.direction === 'up' ? '50%' : 0)};
	border-bottom-left-radius: ${props => (props.direction === 'right' || props.direction === 'up' ? '50%' : 0)};
	border-top-left-radius: ${props => (props.direction === 'right' || props.direction === 'down' ? '50%' : 0)};
	opacity: ${props => props.opacity};
	@media screen and (max-width: 600px) {
		width: 5vw;
		height: 5vw;
	}
`;

export const Eye = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: ${props =>
		props.direction === 'down' ? 'flex-end' : props.direction === 'up' ? 'flex-start' : 'center'};
	justify-content: ${props =>
		props.direction === 'right' ? 'flex-end' : props.direction === 'left' ? 'flex-start' : 'center'};
	@media screen and (max-width: 600px) {
		width: 3px;
		height: 3px;
	}
`;

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
