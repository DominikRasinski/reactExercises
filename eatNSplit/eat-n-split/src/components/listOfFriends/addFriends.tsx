import { Button } from '../button';

export const AddFriend = () => {
  return (
    <form className='form-add-friend'>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type='text' />
      <label>🖼️ Image URL</label>
      <input type='text' />
      <Button>Add</Button>
    </form>
  );
};
