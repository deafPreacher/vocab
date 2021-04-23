const initial = false;

const prefix = '(adder)';

const adderReducer = (state=initial, action) => {
	switch (action.type) {
		case `${prefix} SHOW`: return true;
		case `${prefix} HIDE`: return false;
		default: return state;
	}
}

export const showAdder = () => ({ type : `${prefix} SHOW` });
export const hideAdder = () => ({ type : `${prefix} HIDE` });

export default adderReducer;