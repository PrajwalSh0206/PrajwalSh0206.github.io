import codingLogo from '../assets/coding-flatline-2c892.svg'

function HeroPage() {
    return (
        <div className='flex justify-between p-10 items-center' id='home'>
            <div className='w-7/12 flex flex-col space-y-6 text-gray-700 pl-10'>
                <p className='text-6xl leading-tight'>Hello&#128075;my name is <br />Prajwal Shetty</p>
                <p className='text-xl text-gray-600 text-justify'>
                    I'm a developer constantly seeking new challenges and opportunities to expand my skillset. Dive into my portfolio to discover my journey and how I approach problem-solving with a creative and enthusiastic spirit.
                </p>
                <div className='flex space-x-5'>
                    <button className="flex space-x-2 items-center transition duration-500 transform border-b-8 border-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 hover:text-white rounded-lg w-fit p-2 text-xl border text-indigo-800">
                        <svg width="24px" strokeWidth="1.5" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M18.5 15L5.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path><path d="M16 4L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 4.5L9 10.2602C9 10.7376 8.82922 11.1992 8.51851 11.5617L3.48149 17.4383C3.17078 17.8008 3 18.2624 3 18.7398V19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19V18.7398C21 18.2624 20.8292 17.8008 20.5185 17.4383L15.4815 11.5617C15.1708 11.1992 15 10.7376 15 10.2602L15 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 9.01L12.01 8.99889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 2.01L11.01 1.99889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <p>Explore Projects</p>
                    </button>
                    <button className="flex space-x-2 items-center group transition duration-500 transform hover:-translate-y-1 hover:scale-110 text-gray-800 border-b-8 border-gray-500 hover:bg-gray-800 hover:text-white rounded-lg w-fit p-3 text-xl border">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p>Visit Github</p>
                    </button>
                </div>
            </div>
            <img src={codingLogo} className='w-5/12' alt="" srcSet="" />
        </div>
    )
}

export default HeroPage
