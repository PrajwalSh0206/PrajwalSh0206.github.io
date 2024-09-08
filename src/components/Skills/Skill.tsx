import { skillList } from '../../props/data/skillList';
import SkillCard from '../common/SkillCard';
import Title from '../common/Title';

function Skill() {
  return (
    <div className="p-10 lg:p-20 space-y-3 lg:space-y-5 bg-gray-200 text-gray-800 items-start flex flex-col" id="skills">
      <Title title="My Skills" borderColor="bg-gray-800"></Title>
      <div className="flex relative w-full flex-wrap">
        {skillList.map(skill => (
          <SkillCard percent={skill.percent} title={skill.title} width={skill.width}></SkillCard>
        ))}
      </div>
    </div>
  );
}

export default Skill;
