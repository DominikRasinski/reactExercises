// TODO: ogarnąć jak działa useReducer
import { useReducer, ChangeEvent } from 'react';

type State = {
  count: number;
  step: number;
};

type Action =
  | { type: 'increment'; step: number }
  | { type: 'decrement'; step: number }
  | { type: 'setCount'; count: number }
  | { type: 'setStep'; step: number }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.step };
    case 'decrement':
      return { ...state, count: state.count - action.step };
    case 'setCount':
      return { ...state, count: action.count };
    case 'setStep':
      return { ...state, step: action.step };
    case 'reset':
      return { count: 0, step: 1 };
    default:
      throw new Error();
  }
}

function DateCounter() {
  const initialState: State = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date('June 21 2027');
  date.setDate(date.getDate() + state.count);

  const dec = () => {
    dispatch({ type: 'decrement', step: state.step });
  };

  const inc = () => {
    dispatch({ type: 'increment', step: state.step });
  };

  const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setCount', count: Number(e.target.value) });
  };

  const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setStep', step: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input type="range" min="0" max="10" value={state.step} onChange={defineStep} />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
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
