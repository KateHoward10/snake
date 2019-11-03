import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	background-color: blue;
	padding: 15px;
	border-radius: 10px;
`;

export const Text = styled.p`
	color: white;
`;

export const Button = styled.button`
	margin: 10px;
	padding: 5px;
	font-size: 16px;
	background-color: white;
	border: 4px solid orange;
	border-radius: 10px;
`;
