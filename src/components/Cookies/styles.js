import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	background-color: blue;
  margin: 0;
  position: fixed;
  bottom: 0;
	@media screen and (min-width: 600px) {
	  flex-direction: row;
	}
`;

export const Text = styled.span`
	color: white;
	flex: 1;
  margin: 10px;
  text-align: center;
	@media screen and (min-width: 600px) {
	  text-align: left;
	}
`;

export const Button = styled.button`
	margin: 10px;
	padding: 5px;
	font-size: 16px;
	background-color: white;
	border: 2px solid orange;
	border-radius: 10px;
	@media screen and (min-width: 600px) {
	  border-width: 4px;
	}
`;
