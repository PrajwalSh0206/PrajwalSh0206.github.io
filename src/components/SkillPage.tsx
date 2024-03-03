import idea from '../assets/start-up-flatline.svg'
import SkillCard from './common/SkillCard'

function SkillPage() {
    
    return (
        <div className='w-full items-center justify-center p-10 rounded-md border border-indigo-900 bg-indigo-50 text-indigo-900 flex space-x-5' id='skills'>
            <img src={idea} className='w-5/12' alt="" srcSet="" />
            <div className='w-3/12 space-y-5'>
                <SkillCard header='Frontend' col1={["Html", "Css/Scss", "Tailwind"]} col2={["Javascript", "Typescript"]}>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 7H16.5L15.5 17L12 18L8.5 17L8.25 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 11.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </SkillCard>
                <SkillCard header='Devops' col1={["Docker"]} col2={["Git"]}>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>

                </SkillCard>
            </div>
            <div className='w-3/12 space-y-5'>
                <SkillCard header='Database' col1={["MySQL"]} col2={["PostgreSQL"]}>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12" stroke="currentColor" strokeWidth="1.5"></path><path d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6" stroke="currentColor" strokeWidth="1.5"></path><path d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z" stroke="currentColor" strokeWidth="1.5"></path></svg>
                </SkillCard>
                <SkillCard header='Backend' col1={["Node Js", "Nest Js", "Ptython"]} col2={["Javascript", "Typescript"]}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13 7L15 9.5L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 7L3 9.5L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 6L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </SkillCard>
            </div>
        </div>
    )
}

export default SkillPage
