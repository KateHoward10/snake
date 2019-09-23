import styled from 'styled-components';

export const Container = styled.div`
	@media screen and (min-width: 600px) {
		visibility: hidden;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	font-size: 24px;
	margin: 5px;
	background-color: white;
	border: 3px solid orange;
	border-radius: 10px;
	color: orange;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 600px) {
		width: 12vw;
		height: 12vw;
	}
`;
