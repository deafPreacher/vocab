const initial = null

const prefix = '(notification)';

const notificationReducer = (state=initial, action) => {
	switch (action.type) {
		case `${prefix} SET` : return action.payload;
		case `${prefix} UNSET` : return null;
		default : return state;
	}
}

export const setNotification = (note) => {
	console.log('setting note');
	return { 
		type : `${prefix} SET`, 
		payload : note 
	}
};
export const unsetNotification = () => ({ type : `${prefix} UNSET` });

export default notificationReducer;