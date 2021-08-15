import { ActionCart, ItemCart } from "../../components";
import "./styles.css";
// context
import { useContextValue } from "../../useContext";

const Cart = ({ history }) => {
	const { state } = useContextValue();
	const products = state.cart.productsCart;

	return (
		<div className='cart'>
			<div className='container'>
				{products.length ? (
					<div className='cart__wrapper'>
						<div className='cart__items'>
							{products.map(item => (
								<ItemCart item={item} key={item.id} />
							))}
						</div>
						<ActionCart history={history} />
					</div>
				) : (
					<p className='cart__no-products'>Your Basket is Empty</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
