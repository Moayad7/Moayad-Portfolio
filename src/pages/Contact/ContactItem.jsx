import React from 'react'

export const ContactItem = (props) => {
  return (
    <div className='lg:text-3xl'>
        {props.num && <h1 className='bold my-8 flex flex-col lg:flex-row justify-center gap-1 text-violet-800'>{props.name}:<a className='text-slate-900'>{props.num}</a></h1>}
        {props.email && <h1 className='bold my-8 flex flex-col lg:flex-row justify-center gap-1 text-violet-800'>{props.name}: <a className='text-slate-900'>{props.email}</a></h1>}
        {props.linkedIn && <h1 className='bold flex flex-col lg:flex-row justify-center my-8 text-violet-800'>{props.name}: <a className='text-slate-900' href={props.linkedIn} target="blank">{props.linkedIn}</a></h1>}
        {props.github && <h1 className='bold flex flex-col lg:flex-row justify-center my-8 text-violet-800'>{props.name}: <a className='text-slate-900' href={props.github} target="blank">{props.github}</a></h1>}
        {props.facebook && <h1 className='bold flex flex-col lg:flex-row justify-centera my-8 text-violet-800'>{props.name}: <a className='text-slate-900' href={props.facebook} target="blank">{props.facebook}</a></h1>}
    </div>
  )
}
