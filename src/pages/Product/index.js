import "./styles.css";
import { Button } from "../../components";
import { useParams } from "react-router-dom";
import { data } from "../../data";
// context
import { useContextValue } from "../../useContext";
import { addToCart } from "../../useContext/actions";

const Product = () => {
	const { dispatch } = useContextValue();
	const { id } = useParams();
	const product = data.find(product => product.id === +id);
	const { img, company, name, info, price } = product;

	return (
		<div className='product'>
			<div className='container'>
				<div className='product__product-Wrapper'>
					<img src={"/" + img} alt='img-products' className='product__img' />
					<div className='product__details'>
						<p className='product__compony'>{company}</p>
						<p className='product__info'>
							Name product: <span>{name}</span>
						</p>
						<p className='product__info'>Description:</p>
						<p>{info}</p>
						<p className='product__info'>
							price<span> ${price}</span>
						</p>
						<Button
							className='button--bg-dark'
							onClick={() => dispatch(addToCart(product))}
						>
							Add
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
