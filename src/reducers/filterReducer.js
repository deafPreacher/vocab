const initial = '';

const prefix = '(filter)';

const filterReducer = (state=initial, action) => {
	switch (action.type) {
		case `${prefix} SET`: return action.payload;
		case `${prefix} UNSET`: return '';
		default: return state;
	}
}

export const setFilter = (filter) => ({ type : `${prefix} SET`, payload : filter });
export const unsetFilter = () => ({ type : `${prefix} UNSET` });

export default filterReducer;