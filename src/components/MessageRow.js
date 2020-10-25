import React from 'react';
import styled, { css } from 'styled-components';

import AvatarContainer from './AvatarContainer';
import Avatar from './Avatar';
import TextBubble from './TextBubble';
import Typing from './Typing';

import maya from '../assets/mayas_avatar.png';
import user from '../assets/user_avatar.png';

const Row = styled.div`
	display: flex;
	font-size: 1.1rem;
	transition: ease all 0.5s;

	${(props) =>
		props.sender === 'maya'
			? css`
					margin-right: 15%;
			  `
			: css`
					flex-direction: row-reverse;
					justify-self: flex-end;
					margin-left: 15%;
			  `}

	@media only screen and (max-width: 1200px) {
		${(props) =>
			props.sender === 'maya'
				? css`
						margin-right: 12%;
				  `
				: css`
						margin-left: 12%;
				  `}
	}

	@media only screen and (max-width: 600px) {
		${(props) =>
			props.sender === 'maya'
				? css`
						margin-right: 10%;
				  `
				: css`
						margin-left: 10%;
				  `}
	}
`;

const MessageRow = (props) => {
	const { sender, bubbleTextType, typing, children } = props;

	let avatarSrc = '';
	if (bubbleTextType === 'single' || bubbleTextType === 'last') {
		if (sender === 'maya') {
			avatarSrc = maya;
		} else {
			avatarSrc = user;
		}
	}

	return (
		<Row sender={sender}>
			<AvatarContainer>
				<Avatar src={avatarSrc} />
			</AvatarContainer>
			<TextBubble sender={sender} bubbleTextType={bubbleTextType}>
				{children ? children : null}
				{typing ? <Typing /> : null}
			</TextBubble>
		</Row>
	);
};

export default MessageRow;
