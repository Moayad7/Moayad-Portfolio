import { motion } from 'framer-motion'
import React, {useState} from 'react'

const items = [
    {
        id:1,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:2,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:3,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:4,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:5,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:6,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:7,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    },
    {
        id:8,
        name: "projectname",
        img: "url",
        link: "url",
        describe: "paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them paragraf about th project to describe them "
    }
]



export const Item = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
        {items.map(item => (
            <motion.button 
                className='flex flex-col md:flex-row items-center text-start p-4 overflow-hidden'
            >
                <motion.img initial={{x:100}} animate={{x:0}} className='w-24 h-24' src='https://picsum.photos/150'></motion.img>
                <div className='p-4 text-center md:text-start'>
                    <h1>{item.name}</h1>
                    <p>{item.describe}</p>
                </div>
            </motion.button>
        ))}
    </div>
  )
}
