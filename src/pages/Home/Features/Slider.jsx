import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import images from './images';

export const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
  
    useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[]);
  
    return (
      <motion.div initial={{x:"3vw"}} animate={{x:"0"}} ref={carousel}  className='overflow-hidden px-6 sm:mx-14'>
        <motion.div className='w-[100rem] sm:w-[160rem] mt-5 cursor-grab overflow-hidden' whileTap={{cursor: "grabbing"}}>
          <motion.div drag='x' dragConstraints={{right:0, left:-width}} className='flex gap-9'>
            {images.map(image => {
              return(
                <div key={image.id}>
                    <motion.div className='mb-5' >
                        <img className='rounded-2xl w-full h-full pointer-events-none '  src={image.img} alt=''/>
                    </motion.div>
                    <a className='text-indigo-600 sm:text-xl italic' href={image.url} target="_blank">{image.url}</a>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }