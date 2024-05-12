import React, { LiHTMLAttributes } from "react";

type skillInfo = {
  skill: string;
  color?: string;
  emoji?: string;
}

interface SkillsProps extends LiHTMLAttributes<HTMLLIElement>{
  skillList: skillInfo[];
  children?: React.ReactNode | undefined;
}

export const SkillList = (props: SkillsProps) => {
  return (
    <ul className="skill-list">
      {props.skillList.map((skill) => {
        return <li className="skill" style={{backgroundColor: skill.color}}>{`${skill.skill} ${skill.emoji}`}</li>;
      })}
    </ul>
  );
};
