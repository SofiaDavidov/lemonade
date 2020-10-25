import { ADD_MAYAS_MSG, ADD_USER_MSG, UPDATE_MAYAS_MSG } from './chatActions';

const initialState = [
	{
		sender: 'maya',
		bubbleTextType: 'single',
		typing: true,
		content: null,
	},
];

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_MSG:
			return [
				...state,
				{
					sender: 'user',
					bubbleTextType: 'single',
					typing: false,
					content: action.payload,
				},
			];
		case ADD_MAYAS_MSG:
			return [
				...state,
				{
					sender: 'maya',
					bubbleTextType: 'last',
					typing: action.payload ? false : true,
					content: action.payload ? action.payload : null,
				},
			];
		case UPDATE_MAYAS_MSG:
			return state.map((item, index) => {
				if (index !== state.length - 1) {
					return item;
				}
				return {
					...item,
					bubbleTextType:
						index !== 0 && state[index - 1].sender === 'maya'
							? 'last'
							: 'first',
					typing: false,
					content: action.payload,
				};
			});
		default:
			return [...state];
	}
};

export default chatReducer;
