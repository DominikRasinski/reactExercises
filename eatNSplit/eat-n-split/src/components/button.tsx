type buttonPops = {
  children: React.ReactNode;
};

export const Button = (props: buttonPops) => {
  const { children } = props;
  return <button className='button'>{children}</button>;
};
