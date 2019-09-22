import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Button = styled.button`
	font-size: 20px;
	margin: 10px;
	padding: 5px;
	background-color: orange;
	border: 4px solid orange;
	border-radius: 10px;
	color: white;
`;

export const Score = styled.p`
	font-size: 20px;
	margin: 10px;
	padding: 5px;
	background-color: transparent;
	border: 4px solid orange;
	border-radius: 10px;
`;
