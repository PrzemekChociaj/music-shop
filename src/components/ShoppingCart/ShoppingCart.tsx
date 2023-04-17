import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from './ShoppingCartContext';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import CartItem from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from '../DataBase/database.json';
import { Button } from '@mui/material';

const ShoppingCart = () => {
	const { getItemQuantity, musicCds } = useShoppingCart();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<>
			<ShoppingCartIcon
				sx={{ cursor: 'pointer' }}
				onClick={() => setIsDrawerOpen(true)}
			/>
			<Drawer
				anchor='right'
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}>
				<Box p={2} width='300px' textAlign='center' role='presentation'>
					<Typography variant='h6' component='div'>
						Cart
					</Typography>
					<Stack gap={3}>
						{musicCds.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
						<div>
							Total: 
							{formatCurrency(
								musicCds.reduce((total, cartItem) => {
									const item = storeItems.find((i) => i.id === cartItem.id);
									return total + (item?.price || 0) * cartItem.quantity;
								}, 0)
							)}
						</div>
					</Stack>
				</Box>
				<CloseIcon onClick={() => setIsDrawerOpen(false)} />
				<Button color='primary' > ORDER </Button>
			</Drawer>
		</>
	);
};

export default ShoppingCart;
