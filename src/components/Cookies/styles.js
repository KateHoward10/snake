import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	background-color: blue;
	margin: 0;
`;

export const Text = styled.span`
	color: white;
	flex: 1;
	margin: 15px;
`;

export const Button = styled.button`
	margin: 15px;
	padding: 5px;
	font-size: 16px;
	background-color: white;
	border: 4px solid orange;
	border-radius: 10px;
`;
