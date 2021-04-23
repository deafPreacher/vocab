import React from 'react';
import PropTypes from 'prop-types';

import {
	Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	list : {
		listStyle: 'none',
		paddingTop : 5
	},
	listItem : {
		marginBottom : 10
	},
	type : {
		
	},
	definition : {
		fontSize : '1rem',
		margin : '0 10px'
	}
});

const WordCollapsed = (props) => {
	const { id } = props.word;
	const [ word ] = props.word.results;
	const { lexicalEntries } = word;
	const classes = useStyles();

	return (
		<div className='WordCollapsed'>
			<Typography 
				gutterBottom
				variant='h4' 
				className={classes.title}
			>{id}</Typography>
			<ul className={classes.list}>
			{
				lexicalEntries.map(
					lexicalEntry => {
						const [ entry ] = lexicalEntry.entries;
						const [ definition ] = entry.shortDefinitions;
						return (
							<li key={lexicalEntry.lexicalCategory.id} className={classes.listItem}>
								<Typography className={classes.type} color='textSecondary' variant='subtitle1'>
									{lexicalEntry.lexicalCategory.text}
								</Typography>
								<Typography className={classes.definition} variant='body2'>{definition}</Typography>
							</li>
						);
					}
				)
			}
			</ul>
		</div>
	);
}

WordCollapsed.propTypes = {
	word : PropTypes.object
}

export default WordCollapsed;