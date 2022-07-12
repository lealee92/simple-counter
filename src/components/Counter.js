import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="counter-container">
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            fontSize: 80,
            cursor: "pointer",
          }}
          className="desc"
          onClick={() => setCounter((count) => count - 1)}
          disabled={counter === 0}
        >
          {/* count va update le state au nv state  */}-
        </button>

        <div className="counter">{counter}</div>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            fontSize: 65,
            cursor: "pointer",
          }}
          className="inc"
          type={"button"}
          onClick={() => setCounter((count) => count + 1)}
          disabled={counter === 10}
        >
          +
        </button>
      </div>

      <button
        style={{
          border: "none",
          backgroundColor: "#9772FB",
          width: 80,
          height: 40,
          borderRadius: 10,
          cursor: "pointer",
        }}
        className="reset"
        type={"button"}
        onClick={() => setCounter(0)}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
