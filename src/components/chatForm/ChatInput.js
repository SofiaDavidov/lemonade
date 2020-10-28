import styled from 'styled-components';

const ChatInput = styled.input`
	border: 2px solid rgb(210, 210, 210);
	border-radius: 7px;
	height: 75%;
	outline: none;
	padding: 5px;
	transition: ease all 0.5s;
	width: 95%;

	&:focus {
		border: 2.5px solid rgb(190, 190, 190);
	}

	@media only screen and (max-width: 1200px) {
		height: 65%;
	}

	@media only screen and (max-width: 900px) {
		height: 60%;
		width: 90%;
	}

	@media only screen and (max-width: 500px) {
		height: 50%;
		width: 90%;
	}
`;

export default ChatInput;
