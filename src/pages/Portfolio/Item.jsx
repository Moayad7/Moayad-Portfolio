import { motion, AnimateSharedLayout, AnimatePresence  } from 'framer-motion'
import React, {useState} from 'react'
import BackDrop from './BackDrop'
import images from './images'

const items = [
    {
        id:1,
        name: "Photo portfolio",
        img: images[0],
        link: "https://moayad7.github.io/photo-gallery/",
        describe: "designed by bootstraps, and include (react router, react link, react modal, react slider) and the photos reference is from picsum.com."
    },
    {
        id:2,
        name: "Advice Generator",
        img: images[1],
        link: "https://moayad7.github.io/advices/",
        describe: "A component app designed by tailwindCSS, shows a random advice from custom api and has pretty motion by (framer-motion)"
    },
    {
        id:3,
        name: "QR generator",
        img: images[2],
        link: "https://moayad7.github.io/qr-generator/",
        describe: "A component app designed by tailwindCSS, used google api to generate QR pattern. "
    },
    {
        id:4,
        name: "Weather app",
        img: images[3],
        link: "https://moayad7.github.io/weather-app/",
        describe: "A component app designed by tailwindCSS, used openweather api to get the weather of locations."
    },
    {
        id:5,
        name: "Login app",
        img: images[4],
        link: "https://moayad7.github.io/login-app/",
        describe: "A component app designed by tailwindCSS, have authentication and simple design."
    },
    {
        id:6,
        name: "Search app",
        img: images[5],
        link: "https://moayad7.github.io/search-app/",
        describe: "A component app designed by bootstraps, very simple app, does search in a list of objects. "
    },
    {
        id:7,
        name: "Blogr landing",
        img: images[6],
        link: "https://moayad7.github.io/blogr-landing/",
        describe: "A linding page made and designed by html,css,bootstraps"
    },
    {
        id:8,
        name: "Bootstrap project:",
        img: images[7],
        link: "https://moayad7.github.io/Bootstrap-project/",
        describe: "A landing page designed only by bootsrap,html."
    }
]


export const Item = () => {
    const [selectedId, setSelectedId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

const handleClick = () => {
    setSelectedId(null);
     setIsOpen(false)
}


  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden' >
        {items.map(item => (
            <motion.div 
                layoutId={item.id}
                onClick={() => {setSelectedId(item.id); setIsOpen(true)}}
                className='flex flex-col md:flex-row items-center text-start p-4 overflow-hidden cursor-pointer'
            >
                <motion.img initial={{x:100}} animate={{x:0}} className=' h-24 shadow-lg rounded-xl' src={item.img.img}></motion.img>
                <div className='p-4 text-center md:text-start'>
                    <motion.h1 className='text-xl bold text-violet-800'>{item.name}</motion.h1>
                    <motion.p className='text-slate-500'>{item.describe}</motion.p>
                </div>
            </motion.div>
            
        ))}

        <AnimatePresence className="" >
            {isOpen && selectedId && (
                <BackDrop onClick={handleClick}>
                        <motion.div 
                            className='text-center absolute relative w-4/5 lg:w-2/3  flex flex-col gap-y-5 bg-slate-100 place-items-center rounded-3xl p-10'
                            layoutId={selectedId}
                            onClick={(e)=>e.stopPropagation()}
                        >
                            <img  className='shadow-lg rounded-xl  lg:h-96' src={items[selectedId - 1].img.img}></.img>
                            
                                <h1 className='text-2xl lg:text-5xl bold'>{items[selectedId - 1].name}</.h1>
                                <p className='lg:text-2xl'>{items[selectedId - 1].describe}</p>
                                <motion.div
                                    whileTap={{y:2}}
                                >
                                <a className='lg:text-2xl bold italic pointer-event-none border-b-2 p-2  border-dashed text-violet-800 rounded-lg border-violet-700 ' href={`${items[selectedId - 1].link}`} target="_blank">Live Demo</a>
                                </motion.div>
                                <button className='bg-violet-800 rounded-2xl px-6 py-3 text-violet-50' onClick={() => {setSelectedId(null); ; setIsOpen(false)}} >close</button>
                           
                        </motion.div>
                </BackDrop>
            )}
        </AnimatePresence>
    </div>
  )
}
