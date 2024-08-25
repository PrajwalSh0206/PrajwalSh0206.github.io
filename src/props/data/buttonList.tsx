import { ButtonPropsDto } from '../dto';

export const buttonList: Array<ButtonPropsDto> = [
  {
    classes:
      'flex space-x-2 items-center group transition duration-500 transform hover:-translate-y-1 text-gray-800 border-b-8 border-gray-700 bg-white rounded-lg w-fit p-3 text-xl hover:text-white hover:bg-gray-700 hover:border-gray-500 border-2',
    image: (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M16.0614 10.4037L14 17L10 17L7.93865 10.4037C7.35085 8.52273 7.72417 6.47307 8.93738 4.92015L11.5272 1.6052C11.7674 1.29772 12.2326 1.29772 12.4728 1.6052L15.0626 4.92015C16.2758 6.47307 16.6491 8.52273 16.0614 10.4037Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M10 20C10 22 12 23 12 23C12 23 14 22 14 20"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8.5 12.5C5 15 7 19 7 19L10 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M15.9312 12.5C19.4312 15 17.4312 19 17.4312 19L14.4312 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    title: 'Getting Started',
    link: '#',
    target: '',
  },
];