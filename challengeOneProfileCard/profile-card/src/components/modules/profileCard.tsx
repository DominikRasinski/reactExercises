import { Avatar } from "./avatar/avatar";
import { Intro } from "./intro/intro";
import { SkillList } from "./skillList/skillList";

export const ProfileCard = () => {
  return (
    <div className='card'>
      <Avatar imgPath='avatar/obraz.png' />
      <div className='data'>
        <Intro
          name='Dominik'
          surname='Rasiński'
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
        <SkillList skillList={
          [
            {skill: 'HTML + CSS', color: 'red', emoji: 'advance'}, 
            {skill: 'JavaScript', color: '#6495ED', emoji: 'advance'},
            {skill: 'Web Design', color: '#8B008B', emoji: 'advance'},
            {skill: 'PHP', color: '#00BFFF', emoji: 'intermidiet'},
            {skill: 'Git', color: '#B22222', emoji: 'begginer'},
            {skill: 'Rect.js', color: '#00FFFF', emoji: 'studing'},
            {skill: 'TypeScipt', color: '#87CEFA', emoji: 'studing'},
            {skill: 'C++', color: '#FFD700', emoji: 'cpp'},
            {skill: 'Godot 4', color: '#008B8B', emoji: 'interesting'}
          ]
        }/>
      </div>
    </div>
  );
};
