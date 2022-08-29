import { motion } from 'framer-motion'
import React from 'react'



const item = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}


export const Title = (props) => {
  return (
    <motion.button
      className='mt-10 md:mt-20 bg-indigo-600 rounded-2xl mx-auto'
      whileFocus={{scale:4, y:150}}
      variants={item}
      initial="hidden"
      animate="visible"
    >
        <h1 className='text-indigo-50 bold shadow-lg p-5 rounded-2xl text-5xl'>{props.name}</h1>
    </motion.button>
  )
}
