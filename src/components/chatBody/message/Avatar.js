import styled from 'styled-components';

const Avatar = styled.img`
	height: 60px;
	transition: ease all 0.5s;

	@media only screen and (max-width: 1200px) {
		height: 55px;
	}

	@media only screen and (max-width: 900px) {
		height: 50px;
	}

	@media only screen and (max-width: 500px) {
		height: 40px;
	}
`;

export default Avatar;
