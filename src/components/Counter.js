import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // const button = document.querySelector(".desc");
  // button.disabled = true;
  // function stateButton() {
  //   if (button.value === 0) {
  //     button.disabled = true;
  //   } else {
  //     button.disabled = false;
  //   }
  // }

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
