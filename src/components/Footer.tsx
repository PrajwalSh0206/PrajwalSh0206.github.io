import message from '../assets/world-connection-two-color-93f1b.svg'
import ContactLink from './common/ContactLink';


type ContactProps = {
    image: React.ReactNode,
    link: string,
    href: string;
};

const FooterSection = () => {

    const contactLinks: ContactProps[] = [
        {
            image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>,
            link: "prajwalshetty57@gmail.com",
            href: "mailto:prajwalshetty57@gmail.com"
        }, {
            image: <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 17V13.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
            link: "https://www.linkedin.com/in/prajwal-shetty-1a3791212/",
            href: "https://www.linkedin.com/in/prajwal-shetty-1a3791212/"
        }, {
            image: <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>,
            link: "https://github.com/PrajwalSh0206",
            href: "https://github.com/PrajwalSh0206"
        }]

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
                        {contactLinks.map((contact) => <ContactLink key={contact.link} link={contact.link} image={contact.image} href={contact.href} />)}
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