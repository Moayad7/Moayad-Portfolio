import React from 'react'
import { Title } from '../../components/Title'
import avatar from '../../assert/avatar/avatar.svg'
import { motion } from 'framer-motion'


export const About = () => {
  return (
    <div className='w-full flex h-full flex-col'>
        <Title name="About Me" />
        <div className='py-20 sm:py-48 md:py-32 lg:py-0 px-5 grid sm:grid-cols-2 items-center  gap-6 my-10 md:my-20 lg:mx-48 xl:mx-72 relative'>
          <p className='font-medium lg:text-3xl text-center sm:text-end p-2 border-r-2 border-dashed border-indigo-500 text-indigo-600'>
          Frontend Developer with experience in building responsive websites with HTML, CSS, JavaScript. Expertise in frameworks like React.js, Vuejs, and with CSS libraries like Boostrabs, TailwindCSS using git as version control. Passionate about clean code and get things done.
          </p>
          <button className='grid justify-center xs:justify:start overflow-hidden'>
            <motion.img initial={{ x:"-100%"}} animate={{x:"0"}} className='h-60 lg:h-96' src={avatar}></motion.img>
          </button>
        </div>
    </div>
  )
}

