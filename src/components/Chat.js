import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import store from '../redux/chatStore';
import ChatForm from './ChatForm';
import Conversation from './Conversation';
import { addMayasMsg, updateMayasMsg } from '../redux/chatActions';

const ChatContainer = styled.div`
	background-color: #ffffff;
	border-radius: 2px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 12px 0px,
		rgba(0, 0, 0, 0.26) 0px 47px 46px -27px;
	height: 95vh;
	width: 80vw;
`;

const introNoUserNameP1 = () => {
	store.dispatch(
		updateMayasMsg('Hi, I’m Maya! Today you’re going to help me to ace my game')
	);
	store.dispatch(addMayasMsg());
};

const introNoUserNameP2 = () => {
	store.dispatch(updateMayasMsg('Let’s start by telling me your name'));
};

const Chat = () => {
	const [userName, setUserName] = useState(null);
	const chatState = useSelector((store) => store);
	const [isFormVisable, setIsFormVisable] = useState(false);
	const timerToClear = useRef(null);

	const delay = (duration) => {
		return new Promise((resolve) => {
			timerToClear.current = setTimeout(() => resolve(), duration);
		});
	};

	const flow1 = async () => {
		await delay(2500);
		introNoUserNameP1();
		await delay(2500);
		introNoUserNameP2();
		setIsFormVisable(true);
	};

	const flow2 = async () => {
		await delay(500);
		store.dispatch(addMayasMsg());
		await delay(2500);
		store.dispatch(
			updateMayasMsg(`Nice to meet you ${userName.split(' ')[0]}!`)
		);
		store.dispatch(addMayasMsg());
		await delay(2500);
		store.dispatch(
			updateMayasMsg(
				'Alright, this is how it’s going to work. List any mathematical expression you can think of - I’ll crunch it in no time.'
			)
		);
	};

	useEffect(() => {
		flow1();
		return () => {
			clearTimeout(timerToClear);
		};
	}, []);

	useEffect(() => {
		console.log(chatState);

		const lastMsg = chatState[chatState.length - 1];
		console.log(lastMsg);

		if (lastMsg && lastMsg.sender === 'user') {
			console.log(lastMsg);
			if (userName === null) {
				setUserName(lastMsg.content);
			}
		}
		return () => {};
	}, [chatState]);

	useEffect(() => {
		if (userName !== null) {
			flow2();
		}
	}, [userName]);

	return (
		<ChatContainer>
			<Conversation isFormVisable={isFormVisable} />
			<ChatForm isFormVisable={isFormVisable} />
		</ChatContainer>
	);
};

export default Chat;
