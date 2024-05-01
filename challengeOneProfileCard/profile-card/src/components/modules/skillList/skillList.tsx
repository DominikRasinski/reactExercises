type SkillListProps = {
  skills: [
    {
      skill: string;
    }
  ];
};

export const SkillList = (props: SkillListProps) => {
  return (
    <ul>
      {props.skills.map((skill) => {
        <li>{skill}</li>;
      })}
    </ul>
  );
};
