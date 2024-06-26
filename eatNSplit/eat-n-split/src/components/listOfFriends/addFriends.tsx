import { useState } from 'react';
import { Button } from '../button';
interface addFriendsProps {
  onAddFriend: (friend: any) => void;
}

export const AddFriend = (props: addFriendsProps) => {
  const [friendName, setFriendName] = useState('');
  const [friendImage, setFriendImage] = useState('https://i.pravatar.cc/48');

  const { onAddFriend } = props;

  const handleAddFriend = (e: any) => {
    e.preventDefault();

    if (friendName.trim() === '' || friendImage.trim() === '') {
      return;
    }

    const id = crypto.randomUUID();

    const newFriend = {
      name: friendName,
      image: `${friendImage}?=${id}`,
      balance: 0,
      id: id,
    };
    onAddFriend(newFriend);

    setFriendName('');
    setFriendImage('https://i.pravatar.cc/48');
  };

  return (
    <form
      className='form-add-friend'
      onSubmit={handleAddFriend}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type='text'
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type='text'
        value={friendImage}
        onChange={(e) => setFriendImage(e.target.value)}
      />
      <Button onEventClick={() => {}}>Add</Button>
    </form>
  );
};
