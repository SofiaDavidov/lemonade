import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import ChatInput from './ChatInput';
import SendButton from './SendButton';
import { addUserMsg } from '../../redux/chatActions';

const Form = styled.form`
	align-content: center;
	align-items: center;
	background: rgb(248, 248, 248);
	display: ${(props) => (props.isFormVisable ? 'grid' : 'none')};
	grid: 70px / 10fr 1fr;
	height: 10%;
	min-height: 70px;
	padding: 0 4px;
	place-items: center center;
`;

const ChatForm = ({ isFormVisable, isFormDisabled }) => {
	const [userInput, setUserInput] = useState('');
	const dispatch = useDispatch();

	const submitMsg = (event) => {
		event.preventDefault();
		dispatch(addUserMsg(userInput));
		setUserInput('');
	};

	return (
		<Form isFormVisable={isFormVisable} onSubmit={submitMsg}>
			<ChatInput
				disabled={isFormDisabled}
				value={userInput}
				onChange={(event) => setUserInput(event.target.value)}
				type='text'
			/>
			<SendButton disabled={isFormDisabled} type='submit' />
		</Form>
	);
};

export default ChatForm;
