import { useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCheckboxChange = (itemId) => {
        setItems(
            items.map((item) =>
                item.id === itemId
                    ? { ...item, isChecked: !item.isChecked }
                    : item
            )
        );
    };

    const handleRemove = (itemId) => {
        setItems(items.filter((item) => item.id !== itemId));
    };

    const handleEdit = (itemId) => {
        // change item input state and refresh items array
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setItems([
            ...items,
            {
                id: Math.random(),
                label: inputValue,
                isChecked: false,
            },
        ]);
        setInputValue("");
    };

    return (
        <form action="/" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="add smth here..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit" disabled={inputValue.trim() === ""}>
                Add item
            </button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={item.isChecked}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                            {item.label}
                        </label>
                        <button
                            type="button"
                            onClick={() => handleEdit(item.id)}
                        >
                            edit
                        </button>
                        <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            disabled={item.isChecked === false}
                        >
                            remove
                        </button>
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default TodoList;
