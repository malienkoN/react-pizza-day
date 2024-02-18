import { useState, useEffect } from "react";
// data
import { API_URL } from "../../data/config.js";
// components
import MenuItem from "../MenuItem/index.jsx";

const MenuList = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fethcData = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error("Failed to fetch :(");
                const data = await res.json();
                setMenuData(data.data);
            } catch (err) {
                console.error(`${err} :(`);
            }
        };
        fethcData();
    }, []);

    return (
        <ul>
            {menuData.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default MenuList;
