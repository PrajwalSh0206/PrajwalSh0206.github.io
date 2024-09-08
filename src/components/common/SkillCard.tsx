import React from 'react';
import { SkillPropsDto } from '../../props/dto';

const SkillCard: React.FC<SkillPropsDto> = ({ width, percent, title }) => {
  return (
    <section className="pt-2 md:py-2 md:pr-4 w-full md:w-4/12 flex flex-col space-y-2 text-gray-800">
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{percent}</p>
      </div>
      <div className="w-full border bg-white border-gray-800 rounded-md">
        <div className={`bg-gray-800 p-2 ${width} rounded-md`}></div>
      </div>
    </section>
  );
};

export default SkillCard;
