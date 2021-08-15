import { Button } from "..";
import "./styles.css";
// context
import { useContextValue } from "../../useContext";
import { DELETE_FROM_CART } from "../../useContext/types";
import { addToCart } from "../../useContext/actions";

const ItemCart = ({ item }) => {
	const { dispatch } = useContextValue();
	const { id, name, img, price, totalPrice, qty } = item;

	const increaseClasses =
		qty === 1
			? "itemCart__increase itemCart__increase--disabled"
			: "itemCart__increase";

	const incrementQty = () => {
		const product = {
			...item,
			qty: ++item.qty,
		};
		dispatch(addToCart(product));
	};

	const decrementQty = e => {
		if (qty === 1) return;
		const product = {
			...item,
			qty: --item.qty,
		};
		dispatch(addToCart(product));
	};

	return (
		<div className='itemCart'>
			<img src={img} alt='imgProduct' className='itemCart__img' />
			<div className='itemCart__info'>
				<p className='itemCart__name'>{name}</p>
				<div className='itemCart__counter'>
					<div className='itemCart__increase' onClick={incrementQty}>
						+
					</div>
					<span className='itemCart__count'>{qty}</span>
					<div className={increaseClasses} onClick={decrementQty}>
						-
					</div>
				</div>
				<p className='itemCart__price'>${totalPrice}</p>
				<p className='itemCart__price temCart__price--txt-left'>${price}</p>
				<Button
					className='button--bg-warring'
					onClick={() => dispatch({ type: DELETE_FROM_CART, payload: id })}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default ItemCart;
