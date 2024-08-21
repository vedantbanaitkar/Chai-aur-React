import React from 'react'
import ColorBtn from './ColorBtn'

const Menu = () => {
  return (
    <div className='fixed inset-y-[600px] flex h-20 gap-6 items-center justify-center bg-slate-300 px-4 rounded-md'>
      <ColorBtn color="red"/>
      <ColorBtn color="green"/>
      <ColorBtn color="blue"/>
      <ColorBtn color="olive"/>
      <ColorBtn color="grey"/>
      <ColorBtn color="pink"/>
      <ColorBtn color="purple"/>
      <ColorBtn color="lavender"/>
    </div>
  )
}

export default Menu
