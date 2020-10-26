import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addMayasMsg, updateMayasMsg } from '../redux/chatActions';

const useChatFlow = () => {
	const timerToClear = useRef(null);
	const dispatch = useDispatch();

	const delay = (duration) => {
		return new Promise((resolve) => {
			timerToClear.current = setTimeout(() => resolve(), duration);
		});
	};

	useEffect(() => {
		return () => {
			clearTimeout(timerToClear);
		};
	}, []);

	const introNoUserName = async () => {
		await delay(2500);
		dispatch(
			updateMayasMsg(
				'Hi, I’m Maya! Today you’re going to help me to ace my game'
			)
		);
		dispatch(addMayasMsg());
		await delay(2500);
		dispatch(updateMayasMsg('Let’s start by telling me your name'));
	};

	const newUser = async (userName) => {
		await delay(500);
		dispatch(addMayasMsg());
		await delay(2500);
		dispatch(updateMayasMsg(`Nice to meet you ${userName.split(' ')[0]}!`));
		dispatch(addMayasMsg());
		await delay(2500);
		dispatch(
			updateMayasMsg(
				'Alright, this is how it’s going to work. List any mathematical expression you can think of - I’ll crunch it in no time.'
			)
		);
	};

	const introRecurringUser = async (userName) => {
		await delay(2500);
		dispatch(
			updateMayasMsg(
				`Nice to see you again ${
					userName.split(' ')[0]
				}. Let’s pick this up from where we left off`
			)
		);
		dispatch(addMayasMsg());
		await delay(2500);
		dispatch(
			updateMayasMsg(
				'List any mathematical expression you can think of - I’ll crunch it in no time'
			)
		);
	};

	const sendResult = async (result) => {
		await delay(500);
		dispatch(addMayasMsg());
		await delay(1500);
		dispatch(updateMayasMsg(`${result}`));
		dispatch(addMayasMsg());
		await delay(2500);
		dispatch(updateMayasMsg('This was easy, give me something harder ;)'));
	};

	return { introNoUserName, newUser, introRecurringUser, sendResult };
};

export default useChatFlow;
