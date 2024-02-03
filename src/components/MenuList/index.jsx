// data
import { pizzas } from "../../data/menuData.js"

// components
import Button from "../Button";

// styles
import styles from './index.module.css';

const MenuItem = ({ item }) => {
    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
        });

        return formatter.format(price);
    };

    return (
        <li className={styles.pizza}>
            <img src={item.imageUrl} className={styles.pizza__image} alt={item.name} />
            <div className={styles.pizza__info}>
                <p className={styles.pizza__name}>{item.name}</p>
                <p className={styles.pizza__ingredients}>
                    {item.ingredients.join(', ')}
                </p>
                <div className={styles.pizza__actions}>
                    {item.soldOut ? (
                        <p className={styles.pizza__price}>Sold out</p>
                    ) : (<>
                        <p className={styles.pizza__price}>{formatPrice(item.unitPrice)}</p>
                        <Button>Add to cart</Button>
                    </>)}
                </div>
            </div>
        </li >
    )
}

const MenuList = () => {

    return (
        <ul>
            {pizzas.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default MenuList