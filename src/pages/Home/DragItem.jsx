import React , { useRef }from 'react'
import {motion} from 'framer-motion'


const Index = () => {

  const constraintsRef = useRef(null)


  return (
    <motion.div 
      ref={constraintsRef}
      className='h-80 border-b-2 border-dashed border-indigo-700 text-4xl sm:text-3xl text-indigo-800 items-center h-60 lg:h-full  w-full flex  justify-center overflow-hidden'
    >
        <h1 className='text-xl sm:text-4xl absolute z-[0] opacity-50 w-full text-center text-indigo-800 pb-14'>Enjoy in my space.<br/><span className='text-xl sm:text-3xl text-pink-500'>drag them &#128513;</span></h1>
        <motion.div 
        drag
        dragConstraints={constraintsRef}
        whileTap={{cursor: "grabbing"}}
        initial={{scale:0, x:0}}
        animate={{scale:1,y:60}} 
        className=" sm:text-5xl  cursor-grab"
        >
        <ion-icon name="logo-react"></ion-icon>
        </motion.div>
        <motion.div 
        drag
        dragConstraints={constraintsRef}
        whileTap={{cursor: "grabbing"}}
        initial={{scale:0, x:0}}
        animate={{scale:1,y:60}}
        className="  sm:text-5xl   cursor-grab"
        >
        <ion-icon name="logo-html5"></ion-icon>
        </motion.div>
        <motion.div 
        drag
        dragConstraints={constraintsRef}
        whileTap={{cursor: "grabbing"}}
        initial={{scale:0, x:0}}
        animate={{scale:1,y:60}}
        className="  sm:text-5xl   cursor-grab"
        >
        <ion-icon name="logo-css3"></ion-icon>
        </motion.div>
        <motion.div 
        drag
        dragConstraints={constraintsRef}
        whileTap={{cursor: "grabbing"}}
        initial={{scale:0, x:0}}
        animate={{scale:1,y:60}}
        className="  sm:text-5xl   cursor-grab"
        >
        <ion-icon name="logo-javascript"></ion-icon>
        </motion.div>
        <motion.div 
        drag
        dragConstraints={constraintsRef}
        whileTap={{cursor: "grabbing"}}
        initial={{scale:0, x:0}}
        animate={{scale:1,y:60}}
        className="  sm:text-5xl   cursor-grab"
        >
        <ion-icon name="code"></ion-icon>
        </motion.div>
    </motion.div>
  )
}

export default Index