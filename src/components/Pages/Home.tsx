import React from 'react';
import CdList from '../CdList/CdList';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import ButtonAppBar from '../Header/Navbar';
import MainContent from '../MainContent/MainContent';
import Newsletter from '../Newsletter/Newsletter';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BasicMenu from '../Categories/ListDividers';
import ListDividers from '../Categories/ListDividers';
import Navbar from '../Header/Navbar';

const Home = () => {
	return (
		<>
			<Discount />
			<Navbar />
			<ListDividers />
			<MainContent />
			<CdList />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
