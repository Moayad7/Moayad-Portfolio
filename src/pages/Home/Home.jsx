import React from 'react'
import Drag from './DragItem'
import Advices from './Advices/Advices'
import { Title } from './Title'
import { Features } from './Features/Features'

export const Home = () => {
  return (
    <div className='text-center '>
      <div className='grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-3  sm:gap-4 '> 
          <Drag/>
          <Title/>
          <Advices/>
      </div>
      <Features/>
    </div>
)
}
