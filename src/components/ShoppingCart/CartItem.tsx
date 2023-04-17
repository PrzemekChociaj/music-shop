import React from 'react'
import { useShoppingCart } from './ShoppingCartContext'
import storeItems from "../DataBase/database.json"
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
type CartItemProps = {
    id: number,
    quantity: number,
}
const CartItem = ( {id, quantity}: CartItemProps) => {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(item => item.id ===id)
    if (item == null) return null
  return (
    <Stack justifyContent="center" alignItems="center" gap={2}> 
<img src={item.img} style={{width: "200px", height: "100px", objectFit: "cover"}} />
<div> {item.title} {quantity > 1 && <span>{quantity}x </span>} </div>
<HighlightOffIcon  onClick={() => removeFromCart(item.id)} />
    </Stack>
  )
}

export default CartItem