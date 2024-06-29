import { FriendProps } from '../../App';
import { friendIdUnion } from './list';
import { Button } from '../button';

interface FriendListItemProps {
  friend: FriendProps;
  onSelectedFriend: (friend: any) => void;
  selectedFriendId: friendIdUnion;
}

export const FriendListItem = (props: FriendListItemProps) => {
  const { id, name, image, balance } = props.friend;

  const isSelected = props.selectedFriendId === id;

  return (
    <li className={isSelected ? 'selected' : ''}>
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
      <Button
        onEventClick={() => {
          props.onSelectedFriend(props.friend);
        }}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};
