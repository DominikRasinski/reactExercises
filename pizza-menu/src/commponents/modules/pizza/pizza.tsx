interface PizzaProps {
  photoPath: string;
  name: string;
  ingredients: string;
  price?: number;
}

export const Pizza = (props: PizzaProps) => {
  return (
    <div className="pizza">
      <img src={props.photoPath} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        {props.price && <span>{props.price}</span>}
      </div>
    </div>
  );
};
