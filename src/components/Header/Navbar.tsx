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
import BasicMenu from '../Categories/ListDividers';
import { useShoppingCart } from '../ShoppingCart/ShoppingCartContext';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
export default function Navbar() {
	const navigate = useNavigate();

	const { cartQuantity } = useShoppingCart();

	const MenuHandler = () => {
		BasicMenu();
	};
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
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 3 }}>
						<HomeIcon onClick={HomeHandler} sx={{ cursor: 'pointer' }} />
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
					<Badge badgeContent={cartQuantity} color='secondary'>
						<ShoppingCart />
					</Badge>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
