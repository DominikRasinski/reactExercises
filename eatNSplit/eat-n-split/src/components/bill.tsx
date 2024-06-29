import { useState } from 'react';
import { FriendProps } from '../App';
import { Button } from './button';

interface BillProps {
  friend: FriendProps;
  onSplitBill: (value: number) => void;
}

export const Bill = (props: BillProps) => {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const paidByFriend = bill && paidByUser ? bill - paidByUser : '';

  const { name } = props.friend;
  const { onSplitBill } = props;

  const paidValueIsTrue = (e: number, oldPaid: number, newPaid: number) => {
    return e > bill ? oldPaid : newPaid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? Number(paidByFriend) : -paidByUser);
  };

  return (
    <form
      className='form-split-bill'
      onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💰Bill value</label>
      <input
        type='text'
        value={bill ? bill : ''}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>😎Your expense</label>
      <input
        type='text'
        value={paidByUser ? paidByUser : ''}
        onChange={(e) =>
          setPaidByUser(
            paidValueIsTrue(
              Number(e.target.value),
              paidByUser,
              Number(e.target.value)
            )
          )
        }
      />
      <label>👥{name} expense</label>
      <input
        type='text'
        value={paidByFriend}
        disabled
      />
      <label>💳Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{name}</option>
      </select>
      <Button onEventClick={() => {}}>Split bill</Button>
    </form>
  );
};
