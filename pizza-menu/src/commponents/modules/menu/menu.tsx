import { Pizza } from "../pizza/pizza";

export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Focaccia"
        photoPath="pizzas/focaccia.jpg"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
      />
      <Pizza
        name="Pizza Margherita"
        photoPath="pizzas/margherita.jpg"
        ingredients="Tomato and mozarella"
        price={10}
      />
    </main>
  );
};
