import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
// components
import Button from "../Button";
// styles
import styles from "./index.module.css";

const MenuItem = (props) => {
    const { item } = props;
    const { state, dispatch } = useContext(CartContext);

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
        });

        return formatter.format(price);
    };

    const existingItem = state.items.find((it) => it.id === item.id);

    const qtyInCart = existingItem ? existingItem.qty : 0;

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

    const handleDeleteItem = (id) => {
        dispatch({
            type: "DELETE_ITEM",
            payload: id,
        });
    };

    const handleAddToCart = (item) => {
        dispatch({
            type: "ADD_ITEM",
            payload: item,
        });
    };

    return (
        <li className={styles.pizza}>
            <img
                src={item.imageUrl}
                className={styles.pizza__image}
                alt={item.name}
            />
            <div className={styles.pizza__info}>
                <p className={styles.pizza__name}>{item.name}</p>
                <p className={styles.pizza__ingredients}>
                    {item.ingredients.join(", ")}
                </p>
                <div className={styles.pizza__actions}>
                    {item.soldOut ? (
                        <p className={styles.pizza__price}>Sold out</p>
                    ) : (
                        <>
                            <p className={styles.pizza__price}>
                                {formatPrice(item.unitPrice)}
                            </p>
                            <div className={styles.pizza__action}>
                                {existingItem ? (
                                    <div>
                                        <Button
                                            onClick={() =>
                                                handleDecrement(item.id)
                                            }
                                            disabled={qtyInCart === 1}
                                        >
                                            -
                                        </Button>
                                        <span>{qtyInCart}</span>
                                        <Button
                                            onClick={() =>
                                                handleIncrement(item.id)
                                            }
                                        >
                                            +
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleDeleteItem(item.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to cart
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
