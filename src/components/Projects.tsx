import { projectList } from '../props/data/projectList';
import Title from './common/Title';

const Projects = () => {
  return (
    <div className="w-full flex flex-col space-y-5 items-start p-20 bg-gray-800 border-t-2 text-white border-gray-400" id="projects">
      <Title borderColor="bg-white" title="Projects"></Title>

      <div className="w-full flex space-x-5">
        {projectList.map(val => (
          <a href={val.link} className=" w-6/12 p-5 rounded-md flex space-x-5 items-center">
            <div className="border-2 border-white rounded-md p-3">{val.image}</div>
            <div className="flex flex-col space-y-2">
              <a href={val.link} target="_blank" className="text-xl">
                {val.title}
              </a>
              <p>{val.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
