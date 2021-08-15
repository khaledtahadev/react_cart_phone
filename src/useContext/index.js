import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const Context = createContext();

const initState = {
	cart: {
		productsCart: [],
		total: 0,
	},
};

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	);
};

// export const Consumer = Context.Consumer;

export const useContextValue = () => useContext(Context);
