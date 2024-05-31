import { ItemsType } from '../App';
import { Item } from './item';

type PackingListProps = {
  items: ItemsType[];
};

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
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};
