import React, { useState } from 'react';
import { FriendList } from './components/listOfFriends/list';
import { AddFriend } from './components/listOfFriends/addFriends';
import { Bill } from './components/bill';
import { initialFriends } from './data';
import { Button } from './components/button';

export interface FriendProps {
  id: number;
  name: string;
  image: string;
  balance: number;
}

type unionFriend = FriendProps | null;

function App() {
  const [addFriends, setShowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [friendSelected, setFriendSelected] = useState<unionFriend>(null);

  const handleShowAdd = (e: any) => {
    setShowAddFriend((addFriends) => !addFriends);
  };

  const handleAddNewFriends = (friend: any) => {
    setFriendList((friendList) => [...friendList, friend]);
    setShowAddFriend(false);
  };

  const handleSelectedFriend = (friend: any) => {
    setFriendSelected((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === friendSelected?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setFriendSelected(null);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList
          friends={friendList}
          onSelectedFriend={handleSelectedFriend}
          selectedFriendId={friendSelected?.id}
        />
        {addFriends && <AddFriend onAddFriend={handleAddNewFriends} />}
        <Button onEventClick={handleShowAdd}>
          {addFriends ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {friendSelected && (
        <Bill
          friend={friendSelected}
          onSplitBill={handleSplitBill}
          key={friendSelected.id}
        />
      )}
    </div>
  );
}

export default App;
