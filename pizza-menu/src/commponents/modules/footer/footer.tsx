export const Footer = () => {
  // Open from 12 am and closed on 10 pm
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>
            We're open until {`${closeHour}:00`}. Come visit us or order online.
          </p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          We're happy when you visit us between {`${openHour}:00`} and
          {` ${closeHour}:00`}
        </p>
      )}
    </footer>
  );
};
