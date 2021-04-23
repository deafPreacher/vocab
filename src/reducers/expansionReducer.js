const initial = {
	visible : false,
	word : null
}

const prefix = '(expand)';

const expansionReducer = (state=initial, action) => {
	switch (action.type) {
		case `${prefix} SET`: return { ...state, visible : true, word: action.payload };
		case `${prefix} UNSET`: return { ...state, visible : false, word: null };
		default: return state;
	}
}

export const setWord = (word) => ({ type : `${prefix} SET`, payload : word });
export const unsetWord = () => ({ type : `${prefix} UNSET` });

export default expansionReducer;