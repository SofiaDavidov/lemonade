import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MessageRow from './MessageRow';

const ConversationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: ${(props) => (props.isFormVisable ? '90%' : '100%')};
	transition: ease all 1.5s;

	&::after {
		content: '';
		padding-bottom: 10px;
	}
`;

const Conversation = ({ isFormVisable }) => {
	const messageArray = useSelector((state) => state);

	return (
		<ConversationContainer isFormVisable={isFormVisable}>
			{messageArray.map((message, index) => {
				const { sender, content } = message;
				return (
					<MessageRow key={`${sender}-${index}`} {...message}>
						{content}
					</MessageRow>
				);
			})}
		</ConversationContainer>
	);
};

export default Conversation;
