import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Cart, Product } from "./pages";
import { Provider } from "./useContext/";

function App() {
	return (
		<Provider>
			<Router>
				<div className='app'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/cart' component={Cart} />
						<Route exact path='/products/:id' component={Product} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
