import { calcTotalItems, calcTotalPrice } from "../utils";

export const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const isExist = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (!isExist) {
                const newStateItems = [
                    ...state.items,
                    { ...action.payload, qty: 1 },
                ];

                return {
                    items: newStateItems, // Added quantity for not existing item
                    totalItems: calcTotalItems(newStateItems),
                    totalPrice: calcTotalPrice(newStateItems),
                };
            } else {
                const updatedItems = state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 } // Increment quantity for existing item
                        : item
                );

                return {
                    items: updatedItems,
                    totalItems: calcTotalItems(updatedItems),
                    totalPrice: calcTotalPrice(updatedItems),
                };
            }

        case "DELETE_ITEM":
            const filteredItem = state.items.filter(
                (item) => item.id !== action.payload
            );

            return {
                items: filteredItem,
                totalItems: calcTotalItems(filteredItem),
                totalPrice: calcTotalPrice(filteredItem),
            };

        case "INCREMENT":
            const incrementedItems = state.items.map((item) =>
                item.id === action.payload
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );

            return {
                items: incrementedItems,
                totalItems: calcTotalItems(incrementedItems),
                totalPrice: calcTotalPrice(incrementedItems),
            };

        case "DECREMENT":
            const decrementedItems = state.items.map((item) =>
                item.id === action.payload
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );

            return {
                items: decrementedItems,
                totalItems: calcTotalItems(decrementedItems),
                totalPrice: calcTotalPrice(decrementedItems),
            };

        default:
            return state;
    }
};
