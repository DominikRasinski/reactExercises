import { useState } from 'react';
import { ItemsType, unionId } from '../App';
import { Item } from './item';

interface PackingListProps {
  items: ItemsType[];
  onDeletItem: (id: unionId) => void;
  tooglePacked: (id: unionId) => void;
  clearList: () => void;
}

export const PackingList = (props: PackingListProps) => {
  const { clearList } = props;

  const [sortBy, setSortBy] = useState('input');
  let sortedItems: ItemsType[] = [];

  if (sortBy === 'input') sortedItems = props.items;
  if (sortBy === 'description') {
    sortedItems = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'packed') {
    sortedItems = props.items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
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
      <div className='actions'>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={() => clearList()}>Clear list</button>
      </div>
    </div>
  );
};
