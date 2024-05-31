import React, { useState } from 'react';
import { Logo } from './componnets/logo';
import { Form } from './componnets/form';
import { PackingList } from './componnets/packingList';
import { Stats } from './componnets/stats';

export type ItemsType = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number | string;
};

function App() {
  const [items, setItems] = useState<ItemsType[]>([]);

  const handleAddItems = (item: any) => {
    setItems((items) => [...items, item]);
    console.log(items);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
