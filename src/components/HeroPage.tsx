import codingLogo from '../assets/coding-2-31.svg';
import { buttonList } from '../props/data/buttonList';
import HeroButton from './common/HeroButton';

function HeroPage() {
  return (
    <div className="flex justify-between px-10 lg:px-20 py-10 space-x-10 w-full items-center bg-gray-200 text-gray-800" id="home">
      <div className="w-7/12 flex flex-col space-y-6 text-md lg:text-xl">
        <p className="text-3xl lg:text-5xl leading-tight">
          Hello&#128075;my name is <br />
          Prajwal Shetty
        </p>
        <p className="text-justify">
          I'm a developer passionate about tackling new challenges and continuously expanding my skillset. Welcome to my portfolio, where you can explore my
          journey and see how I approach problem-solving with creativity and enthusiasm
        </p>
        <div className="flex space-x-5">
          {buttonList.map(button => (
            <HeroButton key={button.title} target={button.target} classes={button.classes} image={button.image} title={button.title} link={button.link} />
          ))}
        </div>{' '}
      </div>
      <img src={codingLogo} className="w-5/12" alt="" srcSet="" />
    </div>
  );
}

export default HeroPage;
