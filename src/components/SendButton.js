import styled from 'styled-components';
import { device } from '../utils/devices'; //TODO
import send from '../assets/submit_icon.png';

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
		animation: send 2s ease-in-out forwards;
	}

	@keyframes send {
		0% {
			opacity: 0.8;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
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

	@media only screen and (max-width: 600px) {
		height: 25px;
		margin: 2px;
		width: 25px;
	}
`;

export default SendButton;
