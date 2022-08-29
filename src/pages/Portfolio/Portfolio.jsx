import React from 'react'
import { Title } from '../../components/Title'
import { Items } from './Items'

export const Portfolio = () => {
  return (
    <div className='w-full flex flex-col'>
        <Title name="Portfolio"/>
        <Items/>
    </div>
  )
}

