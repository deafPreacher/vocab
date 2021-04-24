import React from 'react';
import PropTypes from 'prop-types';
import {
	Typography,
	Container,
	Card,
	CardContent,
	Button,
	Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; 

const useStyles = makeStyles({
	container : {
		position : 'relative'
	},
	closeBtn : {
		fontSize : '1.3rem',
		position : 'absolute',
		right : 0,
		top : 0
	},
	unstyledList : {
		listStyle : 'none'
	},
	entryContainer : {
		marginBottom : 10
	}
})

const Examples = ({ examples }) => {
	return (
		<ul className='examples'>
			{ examples.map(
					(example, index) => (
						<li key={index}>
							<Typography variant='body2'>
								{example.text}
							</Typography>
						</li>
					)
				) 
			}
		</ul>
	)
}

const Entry = ({entry}) => {
	// encapsulates definitions and examples
	const { definitions=[], examples=[] } = entry;
	const classes = useStyles();

	return (
		<li>
			<Container>
				<ul className={classes.unstyledList}>
					{
						definitions.map((definition, index) => (
							<li key={index}>
								<Typography variant='subtitle1'>{definition}</Typography>
								<Container className={classes.entryContainer}>
									<Examples examples={examples}/>
								</Container>
							</li>
						))
					}
				</ul>
			</Container>
		</li>
	);
}

const Etymologies = ({ etymologies }) => {
	const classes = useStyles();

	if (!etymologies.length) {
		return null;
	}

	return (
		<ul className={`${classes.unstyledList} ${classes.entryContainer}`}>
			<Typography variant='subtitle1'> etymologies </Typography>
			<Container>
				{ etymologies.map(
						(etymology, index) => (
							<li key={index}>
								<Typography variant='subtitle2'>
									{etymology}
								</Typography>
							</li>
						)) 
				}
			</Container>
		</ul>
	);
}

const LexicalEntry = ({lexicalEntry}) => {
	// encapsulates etymologies, word type, and the entries
	const { lexicalCategory, entries, etymologies } = lexicalEntry;
	const classes = useStyles();

	return (
		<li>
			<Etymologies etymologies={etymologies} />
			<Typography className='word-type' variant='h6' color='textSecondary'>{lexicalCategory.text}</Typography>
			<ul className={classes.unstyledList}>
				{ entries.map( entry => <Entry entry={entry} key={entry.id}/> ) }
			</ul>		
		</li>
	);
}


const Result = ({result}) => {
	// encapsulates lexicalEntries
	const classes = useStyles();

	return (
		<li>
			<Container>
			<ul className={classes.unstyledList}>
				{ result.lexicalEntries.map(entry => <LexicalEntry key={entry.lexicalCategory.id} lexicalEntry={entry}/>) }
			</ul>
			</Container>
		</li>
	);
}

const WordExpanded = (props) => {
	const { id, results } = props.word;
	const classes = useStyles();

	return (
		<div className='WordExpanded'>
			<Card className={classes.container}>
				<CardContent>
				<Typography variant='h4' gutterBottom>{id}</Typography>
				<ul className={classes.unstyledList}>
					{ results.map( 
							(result, index) => (
								<div>
									<Result result={result} key={index}/> 
									<Divider />
								</div>
							)
						) }
				</ul>
				<Button
					className={classes.closeBtn}
					onClick={props.handleNegative}
					size='small'
					>x</Button>
				</CardContent>
			</Card>
		</div>
	);
}

WordExpanded.propTypes = {
	word : PropTypes.object,
	handleNegative : PropTypes.func
}

export default WordExpanded;