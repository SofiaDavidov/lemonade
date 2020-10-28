import styled from 'styled-components';

const AvatarContainer = styled.div`
	align-items: center;
	align-self: center;
	display: flex;
	flex-shrink: 0;
	height: 75px;
	justify-content: center;
	width: 110px;
	transition: ease all 0.5s;

	@media only screen and (max-width: 1200px) {
		width: 70px;
		height: 70px;
	}

	@media only screen and (max-width: 900px) {
		width: 65px;
		height: 65px;
	}

	@media only screen and (max-width: 500px) {
		width: 50px;
		height: 50px;
	}
`;

export default AvatarContainer;
