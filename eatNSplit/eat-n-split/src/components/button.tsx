type buttonPops = {
  onEventClick: (e: any) => void;
  children: React.ReactNode;
};

export const Button = (props: buttonPops) => {
  const { children, onEventClick } = props;
  return (
    <button
      onClick={(e) => onEventClick(e.target)}
      className='button'>
      {children}
    </button>
  );
};
