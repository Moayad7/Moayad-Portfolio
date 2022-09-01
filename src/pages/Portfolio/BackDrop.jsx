import { motion } from "framer-motion";

import React from 'react'

const BackDrop = ({children, onClick}) => {
  return (
    <motion.div
        onClick={onClick}
        className='fixed top-0 left-0 lg:bg-slate-200/75 h-screen w-screen grid place-items-center opacity-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default BackDrop