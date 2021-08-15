import { ADD_TO_CART } from "./types";

export const addToCart = data => {
	const { id, name, img, price, qty = 1 } = data;
	const payload = {
		id,
		name,
		img,
		price,
		qty,
		totalPrice: price * qty,
	};
	return {
		type: ADD_TO_CART,
		payload,
	};
};
