import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <button onClick={() => setCounter((count) => count - 1)}>-</button>
      <button type={"button"} onClick={() => setCounter((count) => count + 1)}>
        +
      </button>

      {counter}
      <button type={"button"} onClick={() => setCounter(0)}>
        reset
      </button>
    </div>
  );
};

export default Counter;
