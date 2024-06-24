import React from 'react';
import { FriendList } from './components/listOfFriends/list';
import { AddFriend } from './components/listOfFriends/addFriends';
import { Bill } from './components/bill';
import { initialFriends } from './data';

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={initialFriends} />
      </div>
      <AddFriend />
      <Bill />
    </div>
  );
}

export default App;
