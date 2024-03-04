import { useReducer, createContext } from "react";
import { initialState, reducer } from "../reducer";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
