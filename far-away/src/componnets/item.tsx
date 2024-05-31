type ItemElement = {
  id: number | string;
  description: string;
  quantity: number;
  packed: boolean;
};

export const Item = (props: ItemElement) => {
  return (
    <li>
      <span className={props.packed ? 'textThrough' : ''}>
        {props.description} {props.quantity}
      </span>
      <button>❌</button>
    </li>
  );
};
