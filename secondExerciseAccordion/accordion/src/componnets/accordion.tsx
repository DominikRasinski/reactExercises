import { AccordionItem } from './accordionItem';
import { dataType } from '../App';
import { HTMLAttributes } from 'react';

interface AccordionProps extends HTMLAttributes<HTMLLIElement> {
  items: dataType[];
  children?: React.ReactNode | undefined;
}

export const Accordion = (props: AccordionProps) => {
  const { items } = props;
  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <AccordionItem
          id={index}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  );
};
