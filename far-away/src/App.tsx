import React from 'react';
import { Logo } from './componnets/logo';
import { Form } from './componnets/form';
import { PackingList } from './componnets/packingList';
import { Stats } from './componnets/stats';

function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
