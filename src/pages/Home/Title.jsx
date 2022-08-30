import React from 'react'
import {motion} from 'framer-motion'
import { Buttons } from './Buttons'


const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

export const Title = () => {
  return (
    <div className='lg:h-80 grid items-center  border-b-2 border-indigo-600 py-9 md:py-14 lg:py14 order-first sm:order-first lg:order-2'>
        <h1 className=' text-center text-indigo-600 text-xl md:text-3xl xl:text-4xl'>
            <span className='italic text-pink-500'>Hello! </span>I'm<br/>
            <motion.span variants={item} initial='hidden' animate='visible' className='bold tracking-wider'>Moayad Ahmad</motion.span><br/>
            Frontend, <span className='text-pink-500'>React </span>developer
        </h1>
        <div className='grid grid-cols-3 gap-3 px-1 xl:px-14'>
            <Buttons name="My CV" url='https://drive.google.com/file/d/1ngG-Kas_WQya5veSOwLyY4r7W6jBZ3jP/view?usp=sharing'/>
            <Buttons name="Portfolio" url='../Portfolio'/>
            <Buttons name="Contact" url='../Contact'/>
        </div>
    </div>
  )
}
