import React from 'react'
import { motion } from 'framer-motion'
import { Logo } from '../Logo'
import { TimeAndWeather } from '../TimeAndWeather'
import { NavItems } from './NavItems'

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
            <nav className='p-5 bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-900 shadow text-indigo-500 md:flex md:items-center justify-evenly md:justify-evenly'>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <span className='text-3xl cursor-pointer mx-2 md:hidden text-indigo-50 '>
                        <ion-icon name="menu" onClick={Menu} className=" transition-all ease-in duration-500"></ion-icon>
                    </span>
                </div>

                <ul className='md:pr-14 md:flex sm:items-center z-[1] md:z-auto md:static bg-indigo-900 md:bg-transparent lg:bg-transparent absolute text-white w-full left-0  md:w-auto md:py-0 py-4 text-center md:opacity-100 top-[75px] left-[-1080px] transition-all ease-in mx-auto'>
                    <NavItems url='moayad-portfolio' name='Home'/>
                    <NavItems url='About' name='About'/>
                    <NavItems url='Portfolio' name='Portfolio'/>
                    <NavItems url='Skills' name='Skills'/>
                    <NavItems url='Contact' name='Contact'/>
                    <NavItems url='https://drive.google.com/file/d/1ngG-Kas_WQya5veSOwLyY4r7W6jBZ3jP/view?usp=sharing' name='My CV'/>
                </ul>

                <TimeAndWeather/>
            </nav>
        </motion.div>
    )
}

export default Index