import styled from 'styled-components';
import send from '../../assets/submit_icon.png';

const SendButton = styled.button`
	background: url(${send}) no-repeat scroll 0 0 transparent;
	background-size: cover;
	border: none;
	box-sizing: border-box;
	height: 40px;
	margin: 15px;
	outline: none;
	transition: ease all 0.5s;
	width: 40px;
	-moz-box-sizing: border-box;

	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}

	@media only screen and (max-width: 1200px) {
		height: 35px;
		margin: 10px;
		width: 35px;
	}

	@media only screen and (max-width: 900px) {
		height: 30px;
		margin: 5px;
		width: 30px;
	}

	@media only screen and (max-width: 500px) {
		height: 20px;
		margin: 2px;
		width: 20px;
	}
`;

export default SendButton;
