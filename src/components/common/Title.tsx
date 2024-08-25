import React from 'react';

interface TitleDto {
  title: string;
  borderColor: string;
}

const Title: React.FC<TitleDto> = ({ title, borderColor }) => {
  return (
    <p className="flex flex-col">
      <p className="text-5xl">{title}</p>
      <div className="flex justify-between items-center w-full space-x-2">
        <div className={`${borderColor} rounded-md p-1 w-full`}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 flex-none"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd"
          />
        </svg>
        <div className={`${borderColor} rounded-md p-1 w-full`}></div>
      </div>
    </p>
  );
};
export default Title;
