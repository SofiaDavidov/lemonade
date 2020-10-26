import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Calculator } from 'antlr-calculator';

import ChatForm from './ChatForm';
import Conversation from './Conversation';
import useLocalStorage from '../hooks/useLocalStorage';
import useChatFlow from './useChatFlow';

const ChatContainer = styled.div`
	background-color: #ffffff;
	border-radius: 2px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 12px 0px,
		rgba(0, 0, 0, 0.26) 0px 47px 46px -27px;
	height: 95vh;
	width: 80vw;
`;

const Chat = () => {
	const [storedUserName, setStoredUserName] = useLocalStorage('userName');
	const [userName, setUserName] = useState(null);
	const chatState = useSelector((store) => store);
	const [isFormVisable, setIsFormVisable] = useState(false);
	const [isFormDisabled, setIsFormDisabled] = useState(false);
	const {
		introNoUserName,
		newUser,
		introRecurringUser,
		sendResult,
	} = useChatFlow();

	useEffect(() => {
		if (!storedUserName) {
			introNoUserName();
			setIsFormVisable(true);
		} else {
			introRecurringUser(storedUserName);
			setIsFormVisable(true);
		}
	}, []);

	useEffect(() => {
		const lastMsg = chatState[chatState.length - 1];
		console.log(lastMsg);

		if (lastMsg && lastMsg.sender === 'user') {
			setIsFormDisabled(true);
			console.log(lastMsg);
			if (!userName && !storedUserName) {
				setUserName(lastMsg.content);
			} else {
				const answer = Calculator.calculate(lastMsg.content);
				sendResult(answer.result);
			}
		}
		return () => {};
	}, [chatState]);

	useEffect(() => {
		if (userName !== null) {
			setStoredUserName(userName);
			newUser(userName);
		}
	}, [userName]);

	return (
		<ChatContainer>
			<Conversation isFormVisable={isFormVisable} />
			<ChatForm isFormDisabled={isFormDisabled} isFormVisable={isFormVisable} />
		</ChatContainer>
	);
};

export default Chat;
