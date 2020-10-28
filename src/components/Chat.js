import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Calculator } from 'antlr-calculator';

import ChatForm from './chatForm/ChatForm';
import Conversation from './chatBody/Conversation';
import useLocalStorage from '../hooks/useLocalStorage';
import useChatFlow from '../hooks/useChatFlow';

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
			introNoUserName().then(() => {
				setIsFormVisable(true);
				setIsFormDisabled(false);
			});
		} else {
			introRecurringUser(storedUserName).then(() => {
				setIsFormVisable(true);
				setIsFormDisabled(false);
			});
		}
	}, []);

	useEffect(() => {
		//Handle any user input
		const lastMsg = chatState[chatState.length - 1];
		if (lastMsg && lastMsg.sender === 'user') {
			setIsFormDisabled(true);
			if (!userName && !storedUserName) {
				setUserName(lastMsg.content);
			} else {
				const answer = Calculator.calculate(lastMsg.content);
				sendResult(answer.result).then(() => setIsFormDisabled(false));
			}
		}
		return () => {};
	}, [chatState]);

	useEffect(() => {
		if (userName !== null) {
			setStoredUserName(userName);
			newUser(userName).then(() => setIsFormDisabled(false));
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
