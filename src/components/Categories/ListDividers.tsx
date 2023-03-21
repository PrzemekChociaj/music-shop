import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const style = {
	width: '100%',
	maxWidth: 300,
	bgcolor: 'background.paper',
	height: '80vh',
	border: 1,
};

const ListDividers = () => {
	const navigate = useNavigate();

	const hipHopHandler = () => {
		navigate('/HipHop');
	};
	const popHandler = () => {
		navigate('/Pop');
	};

	const rockHandler = () => {
		navigate('/Rock');
	};

	const metalHandler = () => {
		navigate('/Metal');
	};
	return (
		<List sx={style} component='nav' aria-label='mailbox folders'>
			<ListItem button>
				<ListItemText onClick={hipHopHandler} primary='Hip Hop' />
			</ListItem>
			<Divider />
			<ListItem button divider>
				<ListItemText onClick={metalHandler} primary='Metal' />
			</ListItem>
			<ListItem button>
				<ListItemText onClick={popHandler} primary='Pop' />
			</ListItem>
			<Divider light />
			<ListItem button>
				<ListItemText onClick={rockHandler} primary='Rock' />
			</ListItem>
		</List>
	);
};

export default ListDividers;
