import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const item3 = {
  hidden: { y: 800, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const NavItems = (props) => {
  return (
    <motion.div
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      variants={item3}
      initial='hidden'
      animate='visible'
      className='mx-4 my-6 md:my-0 whitespace-nowrap block text-center w-full'
    >
    {
      props.name == 'My CV'
      ?<a href={props.url} target='_blank' className='w-full bg-gradient-to-br from-violet-500 to-violet-500 text-white px-7 py-3 rounded-xl '>{props.name}</a> 
      :<motion.li><Link to={props.url} className=' w-full text-xl hover:text-violet-500 '>{props.name}</Link></motion.li>
    }
    </motion.div>
  )
}
