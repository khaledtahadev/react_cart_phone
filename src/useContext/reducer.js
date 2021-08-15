import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "./types";

export default function reducer(state, action) {
	console.log(state);
	switch (action.type) {
		case ADD_TO_CART:
			const cart = state.cart;
			const productsCart = cart.productsCart;
			const index = productsCart.findIndex(
				product => product.id === action.payload.id
			);
			if (index === -1) productsCart.push(action.payload);
			if (index > -1) {
				productsCart[index] = action.payload;
			}
			const totalPrice = productsCart.reduce(
				(acc, product) => product.totalPrice + acc,
				0
			);
			cart.total = totalPrice;

			return {
				...state,
			};

		case DELETE_FROM_CART:
			const filterProductsCart = state.cart.productsCart.filter(
				product => product.id !== action.payload
			);
			const changeTotalPrice = filterProductsCart.reduce(
				(acc, product) => acc + product.price * product.qty,
				0
			);

			return {
				...state,
				cart: {
					productsCart: filterProductsCart,
					total: changeTotalPrice,
				},
			};

		case CLEAR_CART:
			return {
				...state,
				cart: {
					productsCart: [],
					total: 0,
				},
			};
		default:
			return state;
	}
}
