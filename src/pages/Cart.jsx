import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
// components
import Button from "../components/Button";

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleDeleteItem = (id) => {
        dispatch({
            type: "DELETE_ITEM",
            payload: id,
        });
    };

    const handleDecrement = (id) => {
        dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    const handleIncrement = (id) => {
        dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    return (
        <>
            <h1>Cart</h1>
            <div>
                <p>Total totalItems: {state.totalItems}</p>
                <p>Total price: {state.totalPrice}</p>

                <ul>
                    {state.items.map((item) => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>

                            <p>
                                <Button
                                    onClick={() => handleDecrement(item.id)}
                                    disabled={item.qty === 1}
                                >
                                    -
                                </Button>
                                <b>{item.qty}</b>
                                <Button
                                    onClick={() => handleIncrement(item.id)}
                                >
                                    +
                                </Button>
                            </p>

                            <Button onClick={() => handleDeleteItem(item.id)}>
                                delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Cart;
