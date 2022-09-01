import React, {useState} from 'react'
import { motion, AnimateSharedLayout  } from 'framer-motion'
import { Item } from './Item'

export const Items = () => {


  return (
    <motion.div layout className='my-10'>
        <Item/>
    </motion.div>
  )
}
