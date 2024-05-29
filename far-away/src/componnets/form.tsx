import { useState } from 'react';

export const Form = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!description) return;

    setDescription('');
    setQuantity(1);
  };

  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option
            value={num}
            key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
