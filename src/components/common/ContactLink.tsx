import React from "react"

type ProjectProps = {
    image: React.ReactNode,
    link: string,
    href: string;
};

const ContactLink: React.FC<ProjectProps> = ({ image, link, href }) => {
    return (
        <li className='flex space-x-5 items-center'>
            <div className='bg-white text-indigo-600 p-3 rounded-full'>
                {image}
            </div>
            <a className="contactlink" target="_blank" href={href}>
                {link}
            </a>
        </li>
    )
}

export default ContactLink