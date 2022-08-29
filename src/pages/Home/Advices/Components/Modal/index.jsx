import { motion } from "framer-motion";
import React, { useState } from 'react';
import DataFetch from "./DataFetch";
import {Button} from './Button'



const dropIn = {
    hidden: {
        y: "-100vh",
        opcity: 0,
    },
    visible: {
        y:'0',
        opacity: 1,
        transition:{
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        opcity:0,
        x: "-100vw",
        transition:{
            duration: 0.35,
        }
    }

}

const Modal = ({handleClose, text}) => {
    return(
        <div className=" m-4 absolute grid place-items-center w-full h-full" onClick={handleClose}>
            <motion.div
                drag='x'
                dragConstraints={{right:0 ,left:0}}
                onClick={(e)=>e.stopPropagation()}
                className='bg-gradient-to-br from-pink-400 to-pink-600 text-center p-7 rounded-3xl lg:w-2/3 md:w-4/5 w-full'
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit='exit'
            >
                <DataFetch/>
                <Button handleClose={handleClose}/>
            </motion.div>

            
        </div>
    )
}

export default Modal