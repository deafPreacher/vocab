import dictionaryServices from '../services/dictionaryServices.js';
// import words from '../mock_data.js';

const initial = [];
const prefix = '(words)';

const wordsReducer = (state=initial, action) => {
	switch (action.type) {
		case `${prefix} INIT_STORED`: return action.payload;
		case `${prefix} INIT_STARRED`: return action.payload;
		case `${prefix} ADD`: return state.concat( action.payload );
		case `${prefix} UPDATE`: {
			const updated = action.payload;
			return state.map( word => word.id === updated.id ? updated : word );
		};
		case `${prefix} REMOVE`: return state.filter( word => word.id !== action.payload );
		default: return state;
	}
}

export const addIntoWords = (wordId) => {
	return async (dispatch) => {
		const word = await dictionaryServices.getWord( wordId );
		return dispatch({
			type : `${prefix} ADD`,
			payload : word
		});
	}
}

export const initStoredWords = () => {
	return async (dispatch) => {
		const words = await dictionaryServices.getAllStored();
		return dispatch({ 
			type : `${prefix} INIT_STORED`, 
			payload : words
		});
	}
};

export const initStarredWords = () => {
	return async (dispatch) => {
		const words = await dictionaryServices.getAllStarred();
		return dispatch({ 
			type : `${prefix} INIT_STARRED`, 
			payload : words
		});
	}
};

export const removeFromWords = (wordId) => {
	return async (dispatch) => {
		await dictionaryServices.removeWord(wordId);
		return dispatch({
			type : `${prefix} REMOVE`,
			payload : wordId
		})
	}
}

export const updateIntoWords = (wordId, updates) => {
	return async (dispatch) => {
		const updated = await dictionaryServices.updateWord(wordId, updates);
		return dispatch({
			type : `${prefix} UPDATE`,
			payload : updated
		})
	}
}

export default wordsReducer;