import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';

const api={
    key: "3ce3d0be92a24a9b1fedb1bbcdcbcc52",
    url: "https://api.openweathermap.org/data/2.5/"
}

export const TimeAndWeather = () => {

    const [weather, setWeather] = useState({});
    const [query, setQuery] = useState({});

    const date = new Date();

    useEffect(()=>{
        axios.get(`${api.url}weather?q=Damascus&unit=metric&APPID=${api.key}`)
        .then(res=>{
            setWeather(res.data)
            console.log(weather)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


  return (
    <motion.button
        whileHover={{scale:1.4,x:-50}} 
        className='flex flex-col absolute lg:top-4 right-1 top-[-100%] text-indigo-50'
    >
        <h1 className='flex items-center h-6'>{date.toDateString()}<img className='' src={`http://openweathermap.org/img/w/${weather.main && weather.weather[0].icon}.png`}/></h1>
        <h1 className='flex items-center h-6'>{weather.main && weather.name}, {weather.main && weather.weather[0].main}, {Math.round(weather.main && weather.main.temp-273) } &#8451;</h1>
    </motion.button>
  )
}
