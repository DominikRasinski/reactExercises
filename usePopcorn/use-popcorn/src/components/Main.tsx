interface MainProps {
  children: React.ReactNode;
}

export const Main = (props: MainProps) => {
  const { children } = props;

  return <main className='main'>{children}</main>;
};
