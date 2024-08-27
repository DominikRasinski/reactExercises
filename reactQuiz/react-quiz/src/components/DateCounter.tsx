import { ChangeEvent, useState, useReducer } from "react";


type Action = {type: 'increment'; step: number} | {type: 'decrement'; step: number} | {type: "setCount"; step: number};

function reducer(state: number, action: Action): number {
    console.log(state, action);
    switch(action.type) {
        case "increment":
            return state + action.step;
        case "decrement":
            return state - action.step;
        case "setCount":
            return action.step;
        default:
            throw new Error("Unknown action type");
    }
}


function DateCounter() {
//   const [count, setCount] = useState(0);

    const [count, dispach] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispach({type: "decrement", step});
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispach({type: "increment", step});
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    dispach({type: "setCount", step: Number(e.target.value)});
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    dispach({type: "setCount", step: 0})
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
