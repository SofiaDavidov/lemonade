import React from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0.3;
	}
`;

const Dot = styled.div`
	height: 0.6rem;
	width: 0.6rem;
	max-width: 15px;
	border-radius: 100%;
	background-color: darkgray;
	display: inline-block;
	margin: 2px;
	animation: ${typing} 1.2s linear infinite alternate;
	animation-delay: ${(props) => {
		return props.delay;
	}};
`;

const Typing = () => (
	<div>
		<Dot delay='0s' />
		<Dot delay='0.4s' />
		<Dot delay='0.8s' />
	</div>
);

export default Typing;
