import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from './Icon'

export const Items = (props) => {
  return (
    <motion.div 
      className='mt-10 flex flex-col items-center text-3xl lg:text-6xl text-slate-700 hover:text-violet-700 duration-100 bold'
      initial={{scale:0}}
      animate={{scale:1}}
      whileHover={{scale:1.2}}
      drag='x'
      dragConstraints={{right:0, left:0}}
    >
        {/* <Icon logoName={`${props.logoName}`}/> */}
        <h1 className='lg:my-6'>{props.name}</h1>
    </motion.div>
  )
}
