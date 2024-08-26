import brainstorm from '../assets/brainstorming-flatline.svg';
import { projectList } from '../props/data/projectList';
import ProjectCard from './common/ProjectCard';
import Title from './common/Title';

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col space-y-5 items-start p-20 bg-gray-200 border-t-2 border-gray-400"
      id="projects"
    >
      <Title borderColor="bg-gray-800" title="Projects"></Title>

      <div className="w-full flex space-x-5">
        {projectList.map(val => (
          <div className=" w-4/12 rounded-md flex space-x-5 items-start">
            <div className="border-2 border-gray-500 rounded-md p-3">
              {val.image}
            </div>
            <div className="flex flex-col space-y-2">
              <a href={val.link} target="_blank" className="text-xl">
                {val.title}
              </a>
              <p>{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
