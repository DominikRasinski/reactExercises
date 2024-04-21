export const Footer = () => {
  // Open from 12 am and closed on 10 pm
  const hour = new Date().getHours();
  console.log(hour);
  let text = "";
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour) {
    text = "open";
  }
  if (hour >= closeHour || hour < openHour) {
    text = "close";
  }

  return (
    <footer className="footer">{`${new Date().toLocaleTimeString()} We're currently ${text}!`}</footer>
  );
};
