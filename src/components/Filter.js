import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter, unsetFilter } from '../reducers/filterReducer.js';

import {
	InputBase,
	IconButton,
	Paper
} from '@material-ui/core';

import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root : {
		display : 'flex',
		alignItems : 'center',
		padding : 2
	},
	input : {
		flex : 1,
		padding : 5
	}
})

const Filter = ({ ...rest }) => {
	const filter = useSelector( store => store.filter );
	const dispatch = useDispatch();
	const handleChange = ({ target }) => dispatch( setFilter( target.value ) );
	const handleClose = () => dispatch( unsetFilter() );
	const classes = useStyles();

	return (
		<div {...rest} >
			<Paper className={classes.root} component='form' variant='outlined'>
				<InputBase
					className={classes.input}
					name='filter'
					placeholder='search...'
					value={ filter }
					onChange={ handleChange }
				/>
				{!!filter.length && (
						<IconButton onClick={ handleClose }>
					 		<Close/> 
				 		</IconButton>
			 		)
		 		}
		 	</Paper>
		</div>
	)
}

export default Filter;