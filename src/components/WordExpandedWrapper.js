import React from 'react';
import WordExpanded from './WordExpanded';

import { useDispatch, useSelector } from 'react-redux';
import { unsetWord } from '../reducers/expansionReducer.js';

const WordExpandedWrapper = (props) => {
	const { visible, word } = useSelector( store => store.expansion );
	const dispatch = useDispatch();
	const handleNegative = () => dispatch( unsetWord() );

	if (!visible) {
		return null;
	}

	return (
		<WordExpanded
			word={word}
			handleNegative={handleNegative}
		/>
	)
}

export default WordExpandedWrapper;