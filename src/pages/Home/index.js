import { ProductBox } from "../../components";
import "./styles.css";
import { data } from "../../data";

const Home = () => {
	return (
		<div className='home'>
			<div className='container'>
				<div className='home__wrapper-products'>
					{data.map(product => (
						<ProductBox product={product} key={product.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
