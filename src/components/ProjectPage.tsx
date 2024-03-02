
import brainstorm from '../assets/brainstorming-flatline.svg'


const ProjectPage = () => {

    return (
        <div className="w-full flex items-center p-10">
            <div className="w-7/12 flex flex-col space-y-5 pl-10">
                <p className='flex space-x-3 text-2xl items-center border-b-2 border-gray-500 pb-2 w-fit'>
                    <svg width="24px" strokeWidth="1.5" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L20 6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 12L20 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 18L20 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p>My Projects</p>
                </p>
                <div className=''>
                    
                </div>
            </div>
            <div className="w-5/12">
                <img src={brainstorm} alt="" />
            </div>
        </div>
    )
}

export default ProjectPage