import { Button } from './button';

interface BillProps {
  name: string;
}

export const Bill = (props: BillProps) => {
  const { name } = props;
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {name}</h2>
      <label>Bill value</label>
      <input type='text' />
      <label>Your expense</label>
      <input type='text' />
      <label>expense</label>
      <input type='text' />
      <label>Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>{name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};
