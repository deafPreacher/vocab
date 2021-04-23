import React from 'react';
import PropTypes from 'prop-types';
import {
	Typography,
	Box,
	Button,
	TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	controls : {
		padding : 10,
		margin : 5,
		display : 'flex',
		justifyContent : 'space-between'
	}
});


const AddWord = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const wordToAdd = e.target.wordToAdd.value;
		props.handlePositive(wordToAdd);
	}

	const classes = useStyles();

	return (
		<div className='AddWord'>
			<Box p={2}>
				<Typography variant='h5' align='left' gutterBottom>Add New Word</Typography>
				<form onSubmit={ handleSubmit }>
					<div>
						<TextField
							variant='outlined'
							type='text'
							name='wordToAdd'
							placeholder='e.g. Sweet'
							/>
					</div>
					<div className={classes.controls}>
						<Button
							onClick={ () => props.handleNegative() }
							className='negative-btn'
							>Cancel</Button>
						<Button
							color='primary'
							type='submit'
							className='positive-btn'
							>Add</Button>
					</div>
				</form>
			</Box>
		</div>
	);
}

AddWord.propTypes = {
	handlePositive : PropTypes.func,
	handleNegative : PropTypes.func
}

export default AddWord;