import codingLogo from '../assets/coding-flatline-2c892.svg'
import { buttonList } from '../props/data/buttonList'
import HeroButton from './common/HeroButton'

function HeroPage() {

    return (
        <div className='flex justify-between p-10 items-center' id='home'>
            <div className='w-7/12 flex flex-col space-y-6 text-gray-700 pl-10'>
                <p className='text-6xl leading-tight'>Hello&#128075;my name is <br />Prajwal Shetty</p>
                <p className='text-xl text-gray-600 text-justify'>
                    I'm a developer constantly seeking new challenges and opportunities to expand my skillset. Welcome to my portfolio, where you can discover my journey and how I approach problem-solving with a creative and enthusiastic spirit.
                </p>
                <div className='flex space-x-5'>
                    {buttonList.map((button) => <HeroButton key={button.title} target={button.target} classes={button.classes} image={button.image} title={button.title} link={button.link} />)}
                </div>
            </div>
            <img src={codingLogo} className='w-5/12' alt="" srcSet="" />
        </div>
    )
}

export default HeroPage
