import { initialItems } from './data';
import { Item } from './item';

export const PackingList = () => {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <Item
            elements={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};
