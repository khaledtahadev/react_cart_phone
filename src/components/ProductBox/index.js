import { Link } from "react-router-dom";
import { Button } from "..";
import "./styles.css";
// context
import { useContextValue } from "../../useContext";
import { addToCart } from "../../useContext/actions";

const ProductBox = ({ product }) => {
	const { id, name, img, price } = product;
	const { dispatch } = useContextValue();

	return (
		<div className='product-box'>
			<Link to={`/products/${id}`}>
				<img src={img} className='product-box__img' alt='img products' />
			</Link>
			<div className='product-box__info'>
				<p>{name}</p>
				<p>${price}</p>
				<Button
					className='button--bg-blue'
					onClick={() => dispatch(addToCart(product))}
				>
					Add
				</Button>
			</div>
		</div>
	);
};

export default ProductBox;
