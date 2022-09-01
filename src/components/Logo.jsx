import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'


export const Logo = () => {
  return (
    <motion.div whileHover={{scale:1.4,x:50}} >
      <Link to="moayad-portfolio"  className='tracking-wider text-3xl text-white cursor-pointer font-extrabold'>
          MOAYAD<span className='text-violet-500'>;</span>
      </Link>
    </motion.div>
  )
}
