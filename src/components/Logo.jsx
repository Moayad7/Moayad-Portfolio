import { motion } from 'framer-motion'
import React from 'react'


export const Logo = () => {
  return (
    <motion.span whileHover={{scale:1.4,x:50}}  className='text-3xl text-white cursor-pointer bold italic'>
        Moayad<span className='text-pink-500'>;</span>
    </motion.span>
  )
}
