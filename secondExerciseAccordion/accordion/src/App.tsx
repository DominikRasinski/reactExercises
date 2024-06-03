import React from 'react';
import { faqs } from './componnets/data';
import { Accordion } from './componnets/accordion';

export type dataType = {
  title: string;
  text: string;
};

function App() {
  return (
    <>
      <Accordion items={[...faqs]} />
    </>
  );
}

export default App;
