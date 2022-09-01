import React from 'react'
import { Title } from '../../components/Title'
import { Items } from './Items'

export const Skills = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <Title name="Skills & Knowledge"/>
        <div className='my-10 grid grid-cols-1 lg:grid-cols-3  lg:gap-20 '>
          <Items name='HTML5'/>
          <Items name='CSS3'/>
          <Items name='Javascript'/>
          <Items name='React js'/>
          <Items name='REDUX'/>
          <Items name='Bootstraps'/>
          <Items name='TailwindCSS'/>
          <Items name='SASS'/>
          <Items name='HOC'/>
          
        </div>
    </div>
  )
}

