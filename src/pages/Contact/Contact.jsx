import React from 'react'
import { Title } from '../../components/Title'
import { ContactItem } from './ContactItem'


export const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center text-center'>
        <Title name="Contact"/>
        <div className='my-10'>
          <ContactItem name="Phone" num="+963943546728"/>
          <ContactItem name="Email" email="mouayad.ahmad7@gmail.com"/>
          <ContactItem name="Linked In" linkedIn="https://www.linkedin.com/in/moayad-ahmad/"/>
          <ContactItem name="Git Hub" github="https://github.com/Moayad7"/>
          <ContactItem name="Facebook" facebook="https://www.facebook.com/moayad.ahmad0/"/>
        </div>
    </div>
  )
}

