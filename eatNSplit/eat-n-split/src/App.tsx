import React, { useState } from 'react';
import { FriendList } from './components/listOfFriends/list';
import { AddFriend } from './components/listOfFriends/addFriends';
import { Bill } from './components/bill';
import { initialFriends } from './data';
import { Button } from './components/button';

function App() {
  const [addFriends, setAddFriends] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);

  const handleShowAdd = (e: any) => {
    setAddFriends((addFriends) => !addFriends);
  };

  const handleAddNewFriends = (friend: any) => {
    setFriendList((friendList) => [...friendList, friend]);
    setAddFriends(false);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friendList} />
        {addFriends && <AddFriend onAddFriend={handleAddNewFriends} />}
        <Button onEventClick={handleShowAdd}>
          {addFriends ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <Bill name='DUPA' />
    </div>
  );
}

export default App;
