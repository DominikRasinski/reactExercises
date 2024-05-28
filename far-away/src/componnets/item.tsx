import React, { LiHTMLAttributes, ReactNode } from 'react';

type ItemElement = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  elements: ItemElement;
  children?: ReactNode | undefined;
}

export const Item = (props: ItemProps) => {
  const { description, quantity, packed } = props.elements;
  return (
    <li>
      <span className={packed ? 'textThrough' : ''}>
        {description} {quantity}
      </span>
      <button>❌</button>
    </li>
  );
};
