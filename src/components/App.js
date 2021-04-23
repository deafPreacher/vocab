import React, { useEffect, useRef } from 'react';
import FilterableWordList from './FilterableWordList';
import AddWordWrapper from './AddWordWrapper';
import Filter from './Filter';
import WordExpandedWrapper from './WordExpandedWrapper';
import MenuBar from './MenuBar';

import { initStoredWords, initStarredWords } from '../reducers/wordsReducer';
import { showAdder, hideAdder } from '../reducers/adderReducer';
import { unsetWord } from '../reducers/expansionReducer';
import { unsetNotification } from '../reducers/notificationReducer.js';

import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
  Fab,
  Button,
  Snackbar,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import {
  Add,
  Close,
  Menu,
  Star,
  List as ListIcon
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  header : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center'
  },
  container : {
    position : 'relative',
    marginTop : 10
  },
  fab : {
    margin : '10px 0',
  },
  menu : {
    marginRight : 10,
    color : 'white'
  },
  title : {
    flexBasis : '50%'
  },
  filter : {
    flexBasis : '50%'
  }
})

const App = () => {

	const dispatch = useDispatch();
  const note = useSelector( store => store.notification );
  const expansion = useSelector( store => store.expansion );
  const adder = useSelector( store => store.adder );
	const classes = useStyles();
  const menuRef = useRef();

  const handleMenuToggle = () => {
    console.log('toggling menu bar');
    if (menuRef.current)
      menuRef.current.changeOpen(true);
  }
  const handleDisplayStarred = () => {
    try {
      dispatch( initStarredWords() )  
    } catch (e) {
      console.error(e);
    }
    console.log('show only starred');
  }
  const handleDisplayStored = () => {
    try {
      dispatch( initStoredWords() )
    } catch (e) {
      console.error(e);
    }
    console.log('show all');
  }

	useEffect(() => {
    try{
      dispatch( initStoredWords() );
    } catch (e) {
      console.error(e);
    }
	}, [dispatch]);

  return (
    <div className="App">
        <header className={classes.header}>
          <MenuBar 
            ref={menuRef}
            >
            <List>
              <ListItem button onClick={ handleDisplayStored }>
                <ListItemIcon><ListIcon/></ListItemIcon>
                <ListItemText primary='All'/>
              </ListItem>
              <ListItem button onClick={ handleDisplayStarred }>
                <ListItemIcon><Star/></ListItemIcon>
                <ListItemText primary='Starred'/>
              </ListItem>
            </List>
          </MenuBar>
          <AppBar position='relative'>
            <Toolbar>
              <IconButton onClick={ handleMenuToggle }>
                <Menu className={classes.menu}/>
              </IconButton>
            	<Typography 
                className={classes.title}
                variant='h4' 
              >Vocab</Typography>
            	<Filter 
                className={classes.filter}
              />
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <Container className={classes.container}>
          	<Dialog
              open={expansion.visible}
              onClose={ () => dispatch( unsetWord() ) }
              >
              <Box m={2}>
                <WordExpandedWrapper />
              </Box>
            </Dialog>
            <Dialog
              open={adder}
              onClose={ () => dispatch( hideAdder() ) }
              >
              <AddWordWrapper />
            </Dialog>
          	<FilterableWordList />
          </Container>
        </main>
        <footer>
          <Container>
            <Box 
              my={2}
              py={2}
              align='right'
            >
            	<Fab
                className={classes.fab}
                color='primary'
       					onClick={ () => dispatch( showAdder() ) }
            		><Add /></Fab>
            </Box>
            
            <Snackbar
              open={!!note.note}
              message={note.note}
              onClose={ () => dispatch( unsetNotification() ) }
              action={
                <Button
                  onClick={ () => dispatch( unsetNotification() ) }
                  color='secondary'
                ><Close /></Button>
              }
            />
          </Container>
        </footer>
    </div>
  );
}

export default App;