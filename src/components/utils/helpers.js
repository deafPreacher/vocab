import { setNotification, unsetNotification } from '../reducers/notificationReducer.js';

const putNotification = (dispatch, note, type) => {
	dispatch( setNotification(note, type) );
	setTimeout(dispatch, 5000, unsetNotification());
}

export default {
	putNotification
}