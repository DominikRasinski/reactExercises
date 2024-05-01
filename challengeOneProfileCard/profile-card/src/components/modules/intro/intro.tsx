type IntroProps = {
  name: string;
  surname: string;
  description: string;
};

export const Intro = (props: IntroProps) => {
  return (
    <>
      <h1>{`${props.name} ${props.surname}`}</h1>
      <p>{props.description}</p>
    </>
  );
};
