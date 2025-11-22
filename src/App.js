/* Counter made with HTML CSS JS
https://codepen.io/povoco28/pen/dPGJOMa */

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); /* useState(initial value) */
  let btnColor = count > 0 ? "green" : count < 0 ? "red" : "black"; //Tenery operator for > 2 cases 🤯
  /* if (count > 0) {
    btnColor = "green";
  }
  if (count < 0) {
    btnColor = "red";
  }
  if (count === 0) {
    btnColor = "black";
  } */

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h2>Counter</h2>
      <h1 style={{ color: btnColor }} className="count">
        {count}
      </h1>
      <div className="button-zone">
        <button onClick={decrement} className="decrease-btn">
          DECREASE
        </button>
        <button onClick={reset} className="reset-btn">
          RESET
        </button>
        <button onClick={increment} className="increase-btn">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
