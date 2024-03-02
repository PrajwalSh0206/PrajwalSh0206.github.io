import React from "react"
import { motion } from "framer-motion"

type SkillProps = {
    children: React.ReactNode
    header: string,
    col1: string[];
    col2: string[];
};

const SkillCard: React.FC<SkillProps> = ({ header, col1, col2, children }) => {

    return (
        <motion.div whileInView={{ opacity: 1 }}
            className='flex flex-col bg-white space-y-2 w-full rounded-md shadow-md border border-indigo-900 text-xl'>
            <div className='bg-indigo-900 rounded-t-md text-white p-5 text-center flex space-x-3 items-center justify-center'>
                {children}
                <p>{header}</p>
            </div>
            <div className='flex space-x-2 w-full p-5'>
                <div className='w-6/12 flex flex-col space-y-5 border-r-2 border-indigo-900 px-3'>
                    {col1.map((skill: string) => <p key={skill}>{skill}</p>)}
                </div>
                <div className='w-6/12 flex flex-col space-y-5 px-3'>
                    {col2.map((skill: string) => <p key={skill}>{skill}</p>)}
                </div>
            </div>
        </motion.div>
    )
}

export default SkillCard