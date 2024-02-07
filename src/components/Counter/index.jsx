import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);

  const handleDecrement = () =>
    count > 0 ? setCount((prevCount) => prevCount - 1) : null;

  const handleReset = () => setCount(0);

  return (
    <div>
      <h3>Simple Counter</h3>
      <button
        type="button"
        onClick={handleDecrement}
        aria-label="decrement"
        disabled={count === 0}
      >
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleIncrement} aria-label="increment">
        +
      </button>
      <button type="button" onClick={handleReset} aria-label="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;
