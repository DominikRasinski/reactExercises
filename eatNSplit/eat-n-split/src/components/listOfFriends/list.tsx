import { FriendListItem } from './listItem';

export interface FriendProps {
  id: number;
  name: string;
  image: string;
  balance: number;
}

type FriendListProps = {
  friends: FriendProps[];
};

export const FriendList = (props: FriendListProps) => {
  const { friends } = props;
  return (
    <ul>
      {friends.map((item) => {
        return (
          <FriendListItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            balance={item.balance}
          />
        );
      })}
    </ul>
  );
};
