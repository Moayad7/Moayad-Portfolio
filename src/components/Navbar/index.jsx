import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { TimeAndWeather } from '../TimeAndWeather'

const item = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
const item2 = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
const item3 = {
    hidden: { y: 800, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

const Index = () => {

    

    function Menu() {
        let item = document.querySelector('ion-icon')
        let list = document.querySelector('ul')
        item.name === 'menu' ? (item.name = 'close') : (item.name = 'menu')
        item.name === 'close' ? (list.classList.add('left-[0px]')) : (list.classList.remove('left-[0px]'))

    }

  return (
    <motion.div 
        variants={item}
        initial='hidden'
        animate='visible'
    >

        <nav className='p-5 bg-gradient-to-b from-indigo-600 to-indigo-800 shadow text-indigo-500 md:flex md:items-center justify-evenly md:justify-evenly'>
            <div className='flex justify-between items-center'>
                <Logo/>
                <span className='text-3xl cursor-pointer mx-2 md:hidden block '>
                    <ion-icon name="menu" onClick={Menu} className="transition-all ease-in duration-500"></ion-icon>
                </span>
            </div>
            <ul className='pr-14 md:flex sm:items-center z-[1] md:z-auto md:static bg-indigo-800 md:bg-transparent lg:bg-transparent absolute text-white w-full left-0  md:w-auto md:py-0 py-4 text-center md:opacity-100 top-[75px] left-[-1080px] transition-all ease-in mx-auto'>
                <motion.li 
                whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    variants={item3}
                    initial='hidden'
                    animate='visible'
                className='mx-4 my-6 md:my-0'>
                    <Link
                    
                    
                     to='Home' className='text-xl hover:text-pink-500 duration-500'>Home</Link>
                </motion.li>
                <motion.li 
                whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    variants={item3}
                    initial='hidden'
                    animate='visible'
                className='mx-4 my-6 md:my-0'>
                    <Link
                    
                    
                     to='About' className='text-xl hover:text-pink-500 duration-500'>About</Link>
                </motion.li>
                <motion.li 
                whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    variants={item3}
                    initial='hidden'
                    animate='visible'
                className='mx-4 my-6 md:my-0'>
                    <Link
                    
                    
                     to='Portfolio' className='text-xl hover:text-pink-500 duration-500'>Portfolio</Link>
                </motion.li>
                <motion.li 
                whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    variants={item3}
                    initial='hidden'
                    animate='visible'
                className='mx-4 my-6 md:my-0'>
                    <Link
                    
                    
                     to='Skills' className='text-xl hover:text-pink-500 duration-500'>Skills</Link>
                </motion.li>
                <motion.li 
                whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    variants={item3}
                    initial='hidden'
                    animate='visible'
                className='mx-4 my-6 md:my-0'>
                    <Link
                    
                    
                     to='Contact' className='text-xl hover:text-pink-500 duration-500'>Contact</Link>
                </motion.li>
                <motion.button 
                variants={item3}
                    initial='hidden'
                    animate='visible'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.8}}
                className='bg-gradient-to-br from-pink-500 to-pink-700 text-white duration-600 px-6 py-2 rounded mx-4'>
                    My CV
                </motion.button>
            </ul>


            <TimeAndWeather/>

            {/* <div className='flex justify-between items-center absolute top-5 right-20 hidden sm:static'>
                <span className='text-2xl text-white cursor-pointer bold italic'>
                    Moayad<span className='text-pink-500'>;</span>
                </span>
            </div> */}
            
        </nav>
    </motion.div>
  )
}

export default Index