import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return state - 1;
        case "increment":
            return state + 1;
        case "reset":
            return 0;
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    const handleIncrement = () => dispatch({ type: "increment" });

    const handleDecrement = () =>
        state > 0 ? dispatch({ type: "decrement" }) : null;

    const handleReset = () => dispatch({ type: "reset" });

    return (
        <div>
            <h3>Reducer Counter</h3>
            <button
                type="button"
                onClick={handleDecrement}
                aria-label="decrement"
                disabled={state === 0}
            >
                -
            </button>
            <span>{state}</span>
            <button
                type="button"
                onClick={handleIncrement}
                aria-label="increment"
            >
                +
            </button>
            <button type="button" onClick={handleReset} aria-label="reset">
                reset
            </button>
        </div>
    );
};

export default Counter;
