import React, { useState, useImperativeHandle } from 'react';
import {
	Drawer,
	IconButton,
	Divider,
	Typography
} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	drawerHeader : {
		display : 'flex',
		justifyContent : 'flex-end',
		alignItems : 'center',
		width : 240
	},
	footer : {
		padding : 10
	}
})

const MenuBar = React.forwardRef(( props, ref ) => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const handleClose = () => setOpen(false);

	useImperativeHandle(ref, () => {
		return { changeOpen : setOpen };
	})

	return (
		<Drawer
			open={open}
			anchor='left'
			onClose={handleClose}
		>
			<div className={classes.drawerHeader}>
				<IconButton
					onClick={handleClose}
					><ChevronLeft /></IconButton>
			</div>
			
			<Divider />

			<div>
				{props.children}
			</div>

			<Divider />
			<Typography variant='subtitle2' className={classes.footer} align='center'>
				Vocab &copy; 2021
			</Typography>
		</Drawer>
	)
});

export default MenuBar;