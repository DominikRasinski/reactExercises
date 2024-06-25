import React from 'react';
import { FriendList } from './components/listOfFriends/list';
import { AddFriend } from './components/listOfFriends/addFriends';
import { Bill } from './components/bill';
import { initialFriends } from './data';
import { Button } from './components/button';

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={initialFriends} />
        <AddFriend />
        <Button>Add Friend</Button>
      </div>
      <Bill name='DUPA' />
    </div>
  );
}

export default App;
