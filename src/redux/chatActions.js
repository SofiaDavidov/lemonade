export const ADD_USER_MSG = 'ADD_USER_MSG';

export const addUserMsg = (msg) => {
	return {
		type: ADD_USER_MSG,
		payload: msg,
	};
};

export const ADD_MAYAS_MSG = 'ADD_MAYAS_MSG';

export const addMayasMsg = (msg) => {
	return {
		type: ADD_MAYAS_MSG,
		payload: msg,
	};
};

export const UPDATE_MAYAS_MSG = 'UPDATE_MAYAS_MSG';

export const updateMayasMsg = (msg) => {
	return {
		type: UPDATE_MAYAS_MSG,
		payload: msg,
	};
};
