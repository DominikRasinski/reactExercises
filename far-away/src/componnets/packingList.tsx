import { ItemsType, unionId } from '../App';
import { Item } from './item';

interface PackingListProps {
  items: ItemsType[];
  onDeletItem: (id: unionId) => void;
  tooglePacked: (id: unionId) => void;
}

export const PackingList = (props: PackingListProps) => {
  return (
    <div className='list'>
      <ul>
        {props.items.map((item) => (
          <Item
            id={item.id}
            description={item.description}
            packed={item.packed}
            quantity={item.quantity}
            onDeletItem={props.onDeletItem}
            tooglePacked={props.tooglePacked}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};
