import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filterReducer from './reducers/filterReducer.js';
import adderReducer from './reducers/adderReducer.js';
import expansionReducer from './reducers/expansionReducer.js';
import wordsReducer from './reducers/wordsReducer.js';
import notificationReducer from './reducers/notificationReducer.js';

const reducer = combineReducers({
	filter : filterReducer,
	adder : adderReducer,
	expansion : expansionReducer,
	words : wordsReducer,
	notification : notificationReducer
});

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

export default store;