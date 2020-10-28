import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MessageRow from './message/MessageRow';

const ConversationContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: ${(props) => (props.isFormVisable ? '90%' : '100%')};
	overflow-y: auto;
	transition: ease all 1s;

	&::after {
		content: '';
		padding-bottom: 10px;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;

const InnerWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: auto;
	margin-top: auto !important;
	transition: ease all 1s;
`;

const Conversation = ({ isFormVisable }) => {
	const messageArray = useSelector((state) => state);
	const scroll = useRef(null);

	useEffect(() => {
		scroll.current.scrollTop = scroll.current.scrollHeight;
	}, [messageArray]);

	return (
		<ConversationContainer ref={scroll} isFormVisable={isFormVisable}>
			<InnerWrap>
				{messageArray.map((message, index) => {
					const { sender, content } = message;
					return (
						<MessageRow key={`${sender}-${index}`} {...message}>
							{content}
						</MessageRow>
					);
				})}
			</InnerWrap>
		</ConversationContainer>
	);
};

export default Conversation;
