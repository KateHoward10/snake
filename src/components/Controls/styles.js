import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Button = styled.button`
	margin: 10px;
	padding: 5px;
	background-color: orange;
	border: 4px solid orange;
	border-radius: 10px;
	font-size: 3vw;
	@media screen and (min-width: 600px) {
		font-size: 18px;
	}
`;

export const QuestionButton = styled.button`
	width: 30px;
	height: 30px;
	margin: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: orange;
	border: 4px solid orange;
	border-radius: 50%;
	font-size: 3vw;
	@media screen and (min-width: 600px) {
		font-size: 18px;
	}
`;

export const Score = styled.p`
	margin: 10px;
	padding: 5px;
	background-color: transparent;
	border: 4px solid orange;
	border-radius: 10px;
	font-size: 3vw;
	@media screen and (min-width: 600px) {
		font-size: 18px;
	}
`;
