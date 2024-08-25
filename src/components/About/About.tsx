import Title from '../common/Title';

const About = () => {
  return (
    <div
      className="p-20 text-white space-y-6 bg-gray-700 flex flex-col items-start text-justify"
      id="about"
    >
      <Title borderColor="bg-white" title="What I Do"></Title>
      <div className="flex w-full space-x-10 items-start">
        <section className="flex space-x-5 items-start w-6/12">
          <div className="border-2 rounded-full border-white p-3">
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
                d="M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
              <path
                d="M11 19L13 19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14 6L16 8L14 10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 6L8 8L10 10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-xl">UI Developer</p>
            <p className="text-gray-200">
              Specializes in creating visually appealing and user-friendly
              interfaces, focusing on front-end technologies like HTML, CSS,
              JavaScript, and frameworks like React to ensure a seamless user
              experience.
            </p>
          </div>
        </section>
        <section className="flex space-x-5 items-start w-6/12">
          <div className="border-2 rounded-full border-white p-3">
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M6 18.01L6.01 17.9989"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6 6.01L6.01 5.99889"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 9.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H2.6C2.26863 10 2 9.73137 2 9.4Z"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
              <path
                d="M2 21.4V14.6C2 14.2686 2.26863 14 2.6 14H21.4C21.7314 14 22 14.2686 22 14.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-xl">Backend Developer</p>
            <p className="text-gray-200">
              Focuses on server-side logic, database interactions, and API
              development, using technologies like Node.js, Express, and
              databases such as PostgreSQL or MySQL.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
