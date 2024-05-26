import { sign } from "crypto";
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
        let level = ''

        switch(skill.emoji) {
          case 'begginer':
            level = '👍';
            break;
          case 'advance':
            level = '💪';
            break;
          case 'intermidiet':
            level = '👌';
            break;
          case 'studing':
            level = '📚';
            break;
          case 'cpp':
            level = '🥸';
            break;
          case 'interesting':
            level = '🤖';
            break;
          default: 
            level = '😎';
        }

        return <li className="skill" style={{backgroundColor: skill.color}}>{`${skill.skill} ${level}`}</li>;
      })}
    </ul>
  );
};
