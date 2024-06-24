import { FriendProps } from './list';

export const FriendListItem = (props: FriendProps) => {
  const { id, name, image, balance } = props;
  return <li>{name}</li>;
};
