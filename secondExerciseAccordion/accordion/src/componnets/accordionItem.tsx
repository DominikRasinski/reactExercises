import React, { ReactNode } from 'react';
import { curOpenType } from './accordion';

type AccordionItemProps = {
  id: number;
  title: string;
  curOpen: curOpenType;
  onOpen: (id: number) => void;
  children?: ReactNode;
};

export const AccordionItem = (props: AccordionItemProps) => {
  const { id, title, curOpen, onOpen, children } = props;
  const open = curOpen === id;

  return (
    <div
      className={`item ${open ? 'open' : ''}`}
      onClick={() => onOpen(id)}>
      <p className='number'>{id < 9 ? `0${id + 1}` : id + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{open === false ? '-' : '+'}</p>
      {open && <div className='content-box'>{children}</div>}
    </div>
  );
};
