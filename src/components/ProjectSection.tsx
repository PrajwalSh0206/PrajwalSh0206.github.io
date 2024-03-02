
import brainstorm from '../assets/brainstorming-flatline.svg'
import speech2_0 from '../assets/projects/artificial-intelligence-isometric.svg'
import bookmark from '../assets/projects/mention-outline.svg'
import chat from '../assets/projects/chat-flatline.svg'

import ProjectCard from './common/ProjectCard';

type ProjectProps = {
    image: string
    title: string,
    link: string;
};

const ProjectSection = () => {

    const projectList: Array<ProjectProps> = [
        {
            image: speech2_0, title: "Speech 2.0", link: "https://github.com/PrajwalSh0206/Speech-2.0"
        }, {
            image: bookmark, title: "BookMark", link: "https://github.com/PrajwalSh0206/Bookmark-Api-With-NestJs"
        }, {
            image: chat, title: "Chat Application", link: "https://github.com/PrajwalSh0206/Bookmark-Api-With-NestJs"
        }
    ]

    return (
        <div className="w-full flex items-center p-10" id='project'>
            <div className="w-7/12 flex flex-col space-y-7 pl-10">
                <div className='flex space-x-3 text-2xl items-center border-b-2 border-indigo-900 text-indigo-900 pb-2'>
                    <svg width="24px" strokeWidth="1.5" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M9 6L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 18L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p>My Projects</p>
                </div>
                <div className='flex flex-col space-y-5'>
                    {projectList.map((element) => <ProjectCard key={element.title} image={element.image} title={element.title} link={element.link} />)}
                </div>
            </div>
            <div className="w-5/12">
                <img src={brainstorm} alt="" />
            </div>
        </div>
    )
}

export default ProjectSection