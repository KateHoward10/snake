import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(17, 30px);
	grid-template-columns: repeat(17, 30px);
	margin: 50px;
`;

export const Cell = styled.div`
	background-color: rgba(50, 168, 82, ${props => (props.number % 2 === 0 ? 0.8 : 0.5)});
`;
