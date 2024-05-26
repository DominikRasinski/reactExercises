interface PizzaProps {
  photoPath: string;
  name: string;
  ingredients: string;
  price?: number;
  soldOut?: boolean;
}

export const Pizza = (props: PizzaProps) => {
  console.log(props);

  return (
    <li className={`pizza ${props.soldOut && "sold-out"}`}>
      <img src={props.photoPath} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? `Sold Out` : props.price}</span>
      </div>
    </li>
  );
};
