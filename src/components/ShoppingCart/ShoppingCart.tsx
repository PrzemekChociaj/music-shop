import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from './ShoppingCartContext';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import CartItem from './CartItem';

const ShoppingCart = () => {
	const { closeCart, openCart, getItemQuantity, musicCds } = useShoppingCart();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<>
			<ShoppingCartIcon onClick={() => setIsDrawerOpen(true)} />
			<Drawer
				anchor='right'
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}>
				<Box p={2} width='250px' textAlign='center' role='presentation'>
					<Typography variant='h6' component='div'>
						Cart
					</Typography>
					<Stack gap={3}>
						{musicCds.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
					</Stack>
					<CloseIcon onClick={() => setIsDrawerOpen(false)} />
				</Box>
			</Drawer>
		</>
	);
};

export default ShoppingCart;
