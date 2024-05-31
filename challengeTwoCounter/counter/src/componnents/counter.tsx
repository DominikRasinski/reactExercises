import { useState } from 'react';

export const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const actualDate = new Date('june 21 2027');
  actualDate.setDate(actualDate.getDate() + count);

  const handleAddCount = () => {
    setCount((c: number) => c + step);
  };

  const handleMinusCount = () => {
    setCount((c: number) => c - step);
  };

  const handleCountWithStep = (value: number) => {
    setCount(value + step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(0);
  };

  return (
    <div className='main-container'>
      <div className='btn-counter'>
        <input
          type='range'
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className='btn-counter'>
        <button
          className=''
          onClick={handleMinusCount}>
          -
        </button>
        <input
          type='text'
          onChange={(e) => handleCountWithStep(Number(e.target.value))}
          value={count}
        />
        <button
          className=''
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
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
