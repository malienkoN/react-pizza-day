// data
import { pizzas } from "../../data/menuData.js";
// components
import MenuItem from "../MenuItem/index.jsx";

const MenuList = () => {
    return (
        <ul>
            {pizzas.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default MenuList;
