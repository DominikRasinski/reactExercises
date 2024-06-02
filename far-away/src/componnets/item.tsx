import { unionId } from '../App';

interface ItemsProps {
  id: number | string;
  description: string;
  packed: boolean;
  quantity: number;
  onDeletItem: (id: unionId) => void;
  tooglePacked: (id: unionId) => void;
}

export const Item = (props: ItemsProps) => {
  const { id, packed, description, quantity, onDeletItem, tooglePacked } =
    props;

  return (
    <li>
      <input
        type='checkbox'
        value={packed.toString()}
        onChange={() => tooglePacked(id)}
      />
      <span className={packed ? 'textThrough' : ''}>
        {description} {quantity}
      </span>
      <button onClick={() => onDeletItem(id)}>❌</button>
    </li>
  );
};
