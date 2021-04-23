const initial = {
	note : null,
	type : null
}

const prefix = '(notification)';

const notificationReducer = (state=initial, action) => {
	switch (action.type) {
		case `${prefix} SET` : return { ...state, note : action.payload.note, type : action.payload.type };
		case `${prefix} UNSET` : return { ...state, note : null, type : null };
		default : return state;
	}
}

export const setNotification = (note, type) => {
	console.log('setting note');
	return { 
		type : `${prefix} SET`, 
		payload : { note, type } 
	}
};
export const unsetNotification = (note, type) => ({ type : `${prefix} UNSET` });

export default notificationReducer;