import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import storeItems from '../DataBase/database.json';
import Stack from '@mui/material/Stack';
import { formatCurrency } from '../utilities/formatCurrency';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
formatCurrency;
type CartItemProps = {
	id: number;
	quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
	const { removeFromCart } = useShoppingCart();
	const item = storeItems.find((item) => item.id === id);
	if (!item) return null;
	return (
		<Stack alignItems='center' gap={2}>
			<img
				src={item.img}
				style={{ width: '125px', height: '75px', objectFit: 'cover' }}
			/>
			<div>
				{item.title} {quantity > 1 && <span>{quantity}x </span>}
			</div>
			<div>{formatCurrency(item.price)}</div>
			<HighlightOffIcon onClick={() => removeFromCart(item.id)} />
		</Stack>
	);
};

export default CartItem;
