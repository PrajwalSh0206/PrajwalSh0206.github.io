import { skillList } from '../../props/data/skillList';
import SkillCard from '../common/SkillCard';
import Title from '../common/Title';
import './Skills.scss';

function Skill() {
  return (
    <div className="p-20 space-y-5 bg-gray-200 text-gray-800 items-start flex flex-col" id="skills">
      <Title title="My Skills" borderColor="bg-gray-800"></Title>
      <div className="container items-start">
        {skillList.map(skill => (
          <SkillCard percent={skill.percent} title={skill.title} width={skill.width}></SkillCard>
        ))}
      </div>
    </div>
  );
}

export default Skill;
