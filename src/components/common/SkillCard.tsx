import React from 'react';
import { SkillPropsDto } from '../../props/dto';

const SkillCard: React.FC<SkillPropsDto> = ({ width, percent, title }) => {
  return (
    <section className="item w-6/12 flex flex-col space-y-2 text-gray-800">
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{percent}</p>
      </div>
      <div className="w-full border border-gray-800 rounded-md">
        <div className={`bg-gray-800 p-2 ${width} rounded-md`}></div>
      </div>
    </section>
  );
};

export default SkillCard;
