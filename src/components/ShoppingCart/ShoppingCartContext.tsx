import { ReactNode, createContext, useContext, useState } from 'react';
import ShoppingCart from './ShoppingCart';

type CartItem = {
	id: number;
	quantity: number;
};
type ShoppingCartContext = {
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartQuantity: number;
	musicCds: CartItem[];
};
type ShoppingCartProviderProps = {
	children: ReactNode;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [musicCds, setMusicCds] = useState<CartItem[]>([]);

	const cartQuantity = musicCds.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const increaseCartQuantity = (id: number) => {
		setMusicCds((currCds) => {
			if (currCds.find((item) => item.id === id) == null) {
				return [...currCds, { id, quantity: 1 }];
			} else {
				return currCds.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id: number) => {
		setMusicCds((currCds) => {
			if (currCds.find((item) => item.id === id)?.quantity == 1) {
				return currCds.filter((item) => item.id !== id);
			} else {
				return currCds.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const getItemQuantity = (id: number) =>
		musicCds.find((item) => item.id === id)?.quantity || 0;

	const removeFromCart = (id: number) => {
		setMusicCds((currCds) => {
			return currCds.filter((item) => item.id !== id);
		});
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				musicCds,
				cartQuantity,
			}}>
			{children}
			<ShoppingCart />
		</ShoppingCartContext.Provider>
	);
}
