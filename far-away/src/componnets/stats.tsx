import { ItemsType } from '../App';

interface StatsProps {
  items: ItemsType[];
}

export const Stats = (props: StatsProps) => {
  const { items } = props;

  if (!items.length) {
    return (
      <footer className='stats'>
        <em>Start adding some items to your list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packPrecentege = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {packPrecentege === 100
          ? `You got everything! Ready to go 🪐`
          : `👜 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${packPrecentege}%)`}
      </em>
    </footer>
  );
};
