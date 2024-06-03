import { useState } from 'react';

type AccordionItemProps = {
  id: number;
  title: string;
  text: string;
};

export const AccordionItem = (props: AccordionItemProps) => {
  const [open, setOpen] = useState(false);
  const { id, title, text } = props;
  return (
    <div
      className={`item ${open ? 'open' : ''}`}
      onClick={() => setOpen((o) => !o)}>
      <p className='number'>{id < 9 ? `0${id + 1}` : id + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{open === false ? '-' : '+'}</p>
      {open && <div className='content-box'>{text}</div>}
    </div>
  );
};
