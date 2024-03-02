import message from '../assets/world-connection-two-color-93f1b.svg'
import { contactList } from '../props/data/contactData';
import ContactLink from './common/ContactLink';

const FooterSection = () => {

    return (
        <div className='w-full flex flex-col' id='contactme'>
            <div className="w-full flex items-center justify-center space-x-7 bg-indigo-600 px-10 py-7 border-t-2 border-indigo-900">
                <div className="w-5/12">
                    <img src={message} alt="" />
                </div>
                <div className="w-6/12 flex space-y-5 flex-col text-xl text-white">
                    <div className='text-5xl pb-2 border-white border-b-4 flex space-x-2 w-fit items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-auto h-10">
                            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                        </svg>
                        <p>
                            Get In Touch
                        </p>
                    </div>

                    <ul className='list-none text-xl space-y-3'>
                        {contactList.map((contact) => <ContactLink key={contact.link} link={contact.link} image={contact.image} href={contact.href} />)}
                    </ul>

                </div>
            </div>
            <div className='w-full p-5 flex text-white justify-between bg-indigo-900'>
                <div className='flex space-x-2'>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p>Icons provided by </p> <a className='underline' target='_blank' href='https://iconoir.com/'>Iconoir</a>
                </div>
                <div className='flex space-x-2'>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16L10 13L21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p>Illustrations courtesy of </p> <a className='underline' target='_blank' href='https://www.manypixels.co/gallery'>Many Pixel</a>
                </div>
            </div>
        </div>
    )
}

export default FooterSection