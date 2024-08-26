import Title from '../common/Title';
import './Work.scss';

function Work() {
  return (
    <div className="p-20 bg-gray-200 space-y-5 flex flex-col items-start" id="work">
      <Title title="Work Experience" borderColor="bg-gray-800"></Title>

      <div className="border-l-2 pl-10 border-gray-800 experience">
        <p className="text-xl">Niveus Solutions</p>
        <p className="text-gray-700">2021-2024</p>
        <ul className="mt-5 list-disc text-gray-800">
          <li>
            <span className="text-gray-900 font-medium">React, Sass, and Code Optimization:</span> Worked on a Retirement Project, gaining hands-on experience
            in React, Sass, and optimizing code.
          </li>
          <li>
            <span className="text-gray-900 font-medium"> PDF Creation Module:</span> Integrated Playwright for developing a PDF Creation Module.
          </li>
          <li>
            <span className="text-gray-900 font-medium"> Backend Re-architecture:</span> Led the re-architecture of the backend, improving coding structure and
            performance. Gained skills in Node.js, Express, Redis, and test case development.
          </li>
          <li>
            <span className="text-gray-900 font-medium">Team Leadership:</span> Successfully led a team of 5 backend developers, ensuring 100% project
            completion efficiency.
          </li>
          <li>
            <span className="text-gray-900 font-medium">Modularization and Design Patterns:</span> Contributed to a modularization project, handling multiple
            products within a single system. Acquired expertise in the factory pattern and error handling.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
