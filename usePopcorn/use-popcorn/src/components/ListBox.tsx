import { useState } from 'react';

interface ListBoxProps {
  children: React.ReactNode;
}

export const ListBox = (props: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const { children } = props;
  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen((open: boolean) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
};
