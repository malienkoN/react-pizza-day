import { useState } from "react";
// components
import Button from "../Button";
// styles
import styles from "./index.module.css";

const MenuItem = ({ item }) => {
    const [count, setCount] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
        });

        return formatter.format(price);
    };

    const handleIncrement = () => setCount((prevCount) => prevCount + 1);

    const handleDecrement = () =>
        count > 0 ? setCount((prevCount) => prevCount - 1) : null;

    const handleDelete = () => {
        setIsAdded(false);
        setCount(0);
    };

    const handleAddToCart = () => {
        setIsAdded(true);
        setCount(1);
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
                                {isAdded ? (
                                    <div>
                                        <Button
                                            onClick={handleDecrement}
                                            disabled={count === 1}
                                        >
                                            -
                                        </Button>
                                        <span>{count}</span>
                                        <Button onClick={handleIncrement}>
                                            +
                                        </Button>
                                        <Button onClick={handleDelete}>
                                            Delete
                                        </Button>
                                    </div>
                                ) : (
                                    <Button onClick={handleAddToCart}>
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
