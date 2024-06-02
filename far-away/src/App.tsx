import React, { useState } from 'react';
import { Logo } from './componnets/logo';
import { Form } from './componnets/form';
import { PackingList } from './componnets/packingList';
import { Stats } from './componnets/stats';

export type ItemsType = {
  id: number | string;
  description: string;
  quantity: number;
  packed: boolean;
};

export type unionId = number | string;

function App() {
  const [items, setItems] = useState<ItemsType[]>([]);

  const handleClearList = () => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      setItems([]);
    }
  };

  const handleAddItems = (item: ItemsType) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: unionId) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleTooglePacked = (id: unionId) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeletItem={handleDeleteItem}
        tooglePacked={handleTooglePacked}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
