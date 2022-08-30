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

export const Buttons = (props) => {
  return (
    <motion.button
        variants={item}
        initial='hidden'
        animate='visible'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.8}}
        className='mt-5 whitespace-nowrap'>
        {props.name == 'My CV'
        ?<a href={props.url} target='_blank' className=' bg-gradient-to-br from-pink-500 to-pink-700 text-white px-8 py-3 rounded-xl'>{props.name}</a> 
        :<Link to={props.url}  className='px-5 py-2 rounded-xl border-2 border-dashed border-pink-500 text-pink-500'>{props.name}</Link>
        }
    </motion.button>
  )
}
   