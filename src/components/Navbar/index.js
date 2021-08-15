import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./navbar.css";
// context
import { useContextValue } from "../../useContext";

const Navbar = () => {
	const { state } = useContextValue();
	const lengthProducts = state.cart.productsCart.length;

	return (
		<nav className='navbar'>
			<h1 className='navbar__logo'>
				<Link to='/'>Store phone</Link>
			</h1>
			<div className='navbar__links'>
				<Link
					to='/cart'
					className='navbar__nav-link navbar__nav-link--iconBaskets'
				>
					<FaShoppingBasket />
					<span className='navbar__items-counter'>{lengthProducts}</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
