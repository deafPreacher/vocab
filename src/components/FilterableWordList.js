import React from 'react';
import WordCollapsed from './WordCollapsed';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setWord } from '../reducers/expansionReducer';
import { removeFromWords, updateIntoWords } from '../reducers/wordsReducer';
import { setNotification } from '../reducers/notificationReducer.js';

import {
	Grid,
	Button,
	Card,
	CardContent,
	IconButton
} from '@material-ui/core';
import {
	Delete,
	StarBorder,
	Star
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	container : {
		position : 'relative'
	},
	star : {
		position : 'absolute',
		top : 10,
		right : 10
	}
})

const FilterableWordList = (props) => {
	const dispatch = useDispatch();
	const words = useSelector( store => store.words );
	const filter = useSelector( store => store.filter );
	const filtered = words.filter( word => word.id.includes( filter ) );
	const classes = useStyles();

	const handleExpansion = (word) => {
		const f = () => dispatch( setWord( word ) );
		return f;
	}
	const handleRemoval = (word) => {
		const f = () => {
			dispatch( removeFromWords( word ) );
			dispatch( setNotification(`removing the word '${word}'`) );
		}
		return f;
	}
	const handleStarring = (word) => {
		const f = () => {
			const note = word.starred ? `removing '${word.id}' from starred` : `adding '${word.id}' to starred`;
			dispatch( updateIntoWords(word.id, { stored : word.stored, starred : !word.starred }) );
			dispatch( setNotification(note) )
		}
		return f;
	}

	return (
		<div className='FilterableWordList'>
			<Grid container spacing={3} cols={3} alignItems='center'>
				{ filtered.map( 
						word => (
							<Grid item key={word.id} xs={12} md={3} sm={6} height="50%">
								<Card className={classes.container}>
									<CardContent>
										<WordCollapsed word={word} />
										<Grid container justify='space-between'>
											<IconButton
												size='small'
												onClick={ handleRemoval(word.id) }
												><Delete /></IconButton>
											<Button
												size='small'
												onClick={ handleExpansion(word) }
												>learn more</Button>
										</Grid>
										<IconButton
											className={classes.star}
											size='small'
											onClick={ handleStarring(word) }
											>{word.starred ? <Star /> : <StarBorder />}</IconButton>
									</CardContent>
								</Card>
							</Grid>
						) 
					) 
				}
			</Grid>
		</div>
	);
}

FilterableWordList.propTypes = {
	words : PropTypes.array,
	filter : PropTypes.string
}

export default FilterableWordList;