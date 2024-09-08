import React from 'react';

interface FloatingButtonProps {
  setToggleDisplay: (value: boolean) => void;
  toggleDisplay: Boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = function ({ setToggleDisplay, toggleDisplay }) {
  return (
    <button
      className="p-5 fixed lg:hidden bottom-10 right-10 rounded-full bg-indigo-950 text-white z-50 transform active:scale-90 duration-75 shadow-md"
      onClick={() => setToggleDisplay(!toggleDisplay)}
    >
      {toggleDisplay ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      )}
    </button>
  );
};

export default FloatingButton;
