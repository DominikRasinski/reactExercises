import { FriendProps } from '../../App';
import { FriendListItem } from './listItem';

export type friendIdUnion = number | null | undefined;

type FriendListProps = {
  friends: FriendProps[];
  onSelectedFriend: (friend: any) => void;
  selectedFriendId: friendIdUnion;
};

export const FriendList = (props: FriendListProps) => {
  const { friends } = props;
  return (
    <ul>
      {friends.map((item) => {
        return (
          <FriendListItem
            key={item.id}
            friend={item}
            onSelectedFriend={props.onSelectedFriend}
            selectedFriendId={props.selectedFriendId}
          />
        );
      })}
    </ul>
  );
};
