import { useState } from 'react';

export const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const actualDate = new Date('june 21 2027');
  actualDate.setDate(actualDate.getDate() + count);

  const handlerAddStep = () => {
    setStep((s: number) => s + 1);
  };

  const handlerMinusStep = () => {
    setStep((s: number) => s - 1);
  };

  const handleAddCount = () => {
    setCount((c: number) => c + step);
  };

  const handleMinusCount = () => {
    setCount((c: number) => c - step);
  };

  return (
    <div className='main-container'>
      <div className='btn-counter'>
        <button
          className='btn'
          onClick={handlerMinusStep}>
          -
        </button>
        <span>Step: {step}</span>
        <button
          className='btn'
          onClick={handlerAddStep}>
          +
        </button>
      </div>
      <div className='btn-counter'>
        <button
          className='btn'
          onClick={handleMinusCount}>
          -
        </button>
        <span>Count: {count}</span>
        <button
          className='btn'
          onClick={handleAddCount}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `-${Math.abs(count)} days ago was `}
        </span>
        <span>{actualDate.toDateString()}</span>
      </p>
    </div>
  );
};
