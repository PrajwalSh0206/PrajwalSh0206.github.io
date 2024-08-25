import SkillCard from '../common/SkillCard';
import './Skills.scss';

function Skill() {
  return (
    <div className="bg-white p-20 space-y-5 text-gray-600">
      <p className="text-5xl">My Skills</p>
      <div className="container items-start">
        <SkillCard percent="90%" title="HTML" width="w-11/12"></SkillCard>
        <SkillCard percent="80%" title="CSS/SCSS" width="w-9/12"></SkillCard>
        <SkillCard percent="70%" title="Javascript" width="w-7/12"></SkillCard>
        <SkillCard percent="70%" title="Typescript" width="w-7/12"></SkillCard>
        <SkillCard percent="90%" title="React Js" width="w-11/12"></SkillCard>
        <SkillCard percent="80%" title="Docker" width="w-9/12"></SkillCard>
        <SkillCard percent="50%" title="Git" width="w-6/12"></SkillCard>
        <SkillCard percent="70%" title="MySql" width="w-7/12"></SkillCard>

        <SkillCard percent="40%" title="PostgreSQL" width="w-5/12"></SkillCard>
        <SkillCard percent="80%" title="Node Js" width="w-9/12"></SkillCard>
      </div>
    </div>
  );
}

export default Skill;
