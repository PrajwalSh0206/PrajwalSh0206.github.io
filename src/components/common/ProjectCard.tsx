import React from "react"
import { ProjectPropsDto } from "../../props/dto"


const ProjectCard: React.FC<ProjectPropsDto> = ({ image, title, link }) => {

    return (
        <div className='rounded-md items-center w-full border border-indigo-200 shadow-md flex'>
            <img src={image} className='bg-gray-100 w-2/12 border-r-2 border-gray-300' alt="" />
            <div className='flex space-y-2 flex-col pl-3'>
                <p className='text-xl'>{title}</p>
                <a href={link} target="_blank" className="text-blue-500 cardlink">{link}</a>
            </div>
        </div>
    )
}

export default ProjectCard