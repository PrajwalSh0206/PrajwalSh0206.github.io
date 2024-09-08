import { projectList } from '../props/data/projectList';
import HeroButton from './common/HeroButton';
import Title from './common/Title';

const Projects = () => {
  return (
    <div className="w-full flex flex-col space-y-5 items-center md:items-start p-10 lg:p-20 bg-gray-700 border-t-2 text-white border-gray-400" id="projects">
      <Title borderColor="bg-white" title="Projects"></Title>

      <div className="w-full flex flex-col items-stretch md:flex-row space-y-5 md:space-y-0 md:space-x-5 space-x-0">
        {projectList.map(val => (
          <a
            href={val.link}
            className="w-full md:w-6/12 rounded-md flex-col border-gray-200 overflow-hidden grow bg-white shadow-lg text-black border-2 flex items-start"
          >
            <p className="text-xl bg-gray-200 px-5 py-3 w-full border-b-2 border-gray-400">{val.title}</p>
            <p className="p-5 py-3">{val.description}</p>
          </a>
        ))}
      </div>

      <HeroButton
        classes="flex self-center md:self-start space-x-2 items-center group transition duration-500 transform hover:scale-95 text-gray-800  border-gray-300 rounded-lg p-3 text-md lg:text-xl text-white bg-gray-800 border-2 justify-center"
        image={
          <svg className="w-4 md:w-6 h-4 md:h-6" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
            <path
              d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        }
        link={'https://github.com/PrajwalSh0206'}
        title="More Projects"
        target="_blank"
      ></HeroButton>
    </div>
  );
};

export default Projects;
