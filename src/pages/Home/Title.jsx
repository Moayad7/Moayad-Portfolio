import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

export const Title = () => {
  return (
    <div className='shadow-lg py-9 md:py-14 lg:py14 order-first sm:order-first lg:order-2'>
        <h1 className=' text-center text-indigo-600 text-4xl lg:text-4xl xl:text-5xl'>
            <span className='italic text-pink-500'>Hello! </span>I'm<br/>
            <motion.span variants={item} initial='hidden' animate='visible' className='bold'>Moayad Ahmad</motion.span><br/>
            Frontend, <span className='text-pink-500'>React </span>developer
        </h1>
        <div className='m-5 grid grid-cols-3 gap-4'>
            <motion.button
                variants={item}
                initial='hidden'
                animate='visible'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.8}}
                className='bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded  '>
                <a href="https://drive.google.com/file/d/1ngG-Kas_WQya5veSOwLyY4r7W6jBZ3jP/view?usp=sharing" target='_blank' className='sm:text-2xl'>
                    My CV
                </a>
            </motion.button>
            <motion.button
                variants={item}
                initial='hidden'
                animate='visible'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.8}}
                className='border-2 border-pink-500 text-pink-500 rounded '>
                <Link to="../Portfolio" className='sm:text-2xl'>
                    Portfolio
                </Link>
            </motion.button>
            <motion.button
                variants={item}
                initial='hidden'
                animate='visible'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.8}}
                className='border-2 border-pink-500 text-pink-500 rounded '>
                <Link to="../Contact" className=' sm:text-2xl'>
                    Contact 
                </Link>
            </motion.button>
        </div>
    </div>
  )
}
