import { Pizza } from "../pizza/pizza";
import { pizzaData } from "../pizza/data";

export const Menu = () => {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length > 0;
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzaNum ? (
        <>
          <p>Authentic Italiano Pizza 👌</p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza
                name={`${pizza.name}`}
                ingredients={`${pizza.ingredients}`}
                photoPath={`${pizza.photoName}`}
                price={pizza.price}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our menu, please visit us later</p>
      )}
    </main>
  );
};
