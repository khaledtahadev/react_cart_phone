import "./styles.css";
import { Button } from "..";
// context
import { useContextValue } from "../../useContext";
import { CLEAR_CART } from "../../useContext/types";

const ActionCart = ({ history }) => {
	const { state, dispatch } = useContextValue();
	const { total } = state.cart;

	const handleClear = () => {
		dispatch({ type: CLEAR_CART });
		history.replace("/");
	};

	return (
		<div className='actionCart'>
			<p className='actionCart__total'>
				Total Price: <span>${total}</span>
			</p>
			<Button className='button--bg-blue'>Checkout</Button>
			<Button className='button--bg-warring' onClick={handleClear}>
				Clear cart
			</Button>
		</div>
	);
};

export default ActionCart;
