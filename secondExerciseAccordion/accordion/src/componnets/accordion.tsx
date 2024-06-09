import { AccordionItem } from './accordionItem';
import { dataType } from '../App';
import { HTMLAttributes, useState } from 'react';

export type curOpenType = null | number;

interface AccordionProps extends HTMLAttributes<HTMLLIElement> {
  items: dataType[];
  children?: React.ReactNode | undefined;
}

export const Accordion = (props: AccordionProps) => {
  const [curOpen, setIsOpen] = useState<curOpenType>(null);
  const { items } = props;

  const handleOpen = (id: number) => {
    setIsOpen(id);
  };

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <AccordionItem
          id={index}
          title={item.title}
          key={index}
          curOpen={curOpen}
          onOpen={handleOpen}>
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={23}
        title={'Lista'}
        key={'Lista'}
        curOpen={curOpen}
        onOpen={handleOpen}>
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};
