import { Bill } from './bill';
import { Service } from './service';
import { FriendService } from './friendService';
import { useState } from 'react';

export const Result = () => {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friend, setFriend] = useState(0);

  const handleBill = (event: any) => {
    setBill(event);
  };

  const handleService = (event: number) => {
    setService(event);
  };

  const handleFriend = (event: number) => {
    setFriend(event);
  };

  const tip = bill * (Number(service + friend) / 2 / 100);

  const handleReset = () => {
    setBill(0);
    setService(0);
    setFriend(0);
  };

  return (
    <div>
      <Bill
        billValue={bill}
        onInput={handleBill}
      />
      <Service onSelect={handleService} />
      <FriendService onSelect={handleFriend} />
      <h2>{`You pay ${bill + tip} (${bill} + ${tip} tip)`}</h2>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};
