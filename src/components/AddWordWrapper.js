import React from 'react';
import AddWord from './AddWord';
import { useDispatch, useSelector } from 'react-redux';
import { hideAdder } from '../reducers/adderReducer.js';
import { addIntoWords } from '../reducers/wordsReducer.js';
import { setNotification } from '../reducers/notificationReducer.js';

const AddWordWrapper = (props) => {
	const visible = useSelector(store => store.adder);
	const dispatch = useDispatch();
	const handleNegative = () => dispatch( hideAdder() );
	const handlePositive = (word) => {
		console.log('adding the word', word);
		dispatch( addIntoWords( word ) );
		dispatch( setNotification(`adding the word '${word}'`, 1) )
		dispatch( hideAdder() );
	}

	if (!visible) {
		return null;
	}
	
	return (
		<AddWord
			handlePositive={handlePositive}
			handleNegative={handleNegative}
		/>
	);
}

export default AddWordWrapper;