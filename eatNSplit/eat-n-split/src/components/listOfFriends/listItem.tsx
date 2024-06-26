import { FriendProps } from './list';
import { Button } from '../button';

export const FriendListItem = (props: FriendProps) => {
  const { id, name, image, balance } = props;
  return (
    <li>
      <img
        src={image}
        alt={name}
      />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className='red'>
          You owe {name} {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className='green'>
          {name} owes you {balance}$
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onEventClick={() => {}}>Select</Button>
    </li>
  );
};
