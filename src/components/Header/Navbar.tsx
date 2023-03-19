import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge/Badge';
import TemporaryDrawer from '../Categories/CategoriesMenu';

export default function ButtonAppBar() {
	const navigate = useNavigate();

	const HomeHandler = () => {
		navigate('/');
	};

	const RegisterNavigate = () => {
		navigate('/Register');
	};

	const LoginNavigate = () => {
		navigate('/Login');
	};

	const ShopNavigate = () => {
		navigate('/Shop');
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<HomeIcon
						onClick={HomeHandler}
						sx={{ marginRight: 3, cursor: 'pointer' }}
					/>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 3 }}>
						<MenuIcon />
					</IconButton>

					<Typography
						variant='h4'
						component='div'
						sx={{ flexGrow: 1, marginLeft: 90 }}>
						MAKLER ZONE
					</Typography>
					<Button onClick={RegisterNavigate} color='inherit'>
						Register
					</Button>
					<Button onClick={LoginNavigate} color='inherit'>
						Login
					</Button>

					<AddShoppingCartIcon sx={{ marginLeft: 4 }} onClick={ShopNavigate} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
