import React, { useState } from 'react'
import avatar from '../../assets/avatar.jpg'
import {TiFlash} from 'react-icons/ti'

const Message = () => {
    const [seen, setSeen] = useState(true)
  return (
    <div className=' flex items-center justify-between px-3 bg-gray-800 text-gray-400 gap-4 font-medium w-[80%] py-2'>
        <div className="flex flex-col">
            <p>Hey, Hi, HOW did your day go, well my name is Omokefe Ovie David</p>
            <small className='flex items-center gap-1'><span className='italic text-[12px]'>just now</span><span className={`${ seen ? 'text-orange-600': 'text-gray-400'}`}><TiFlash /></span></small>
        </div>
        <div className="flex">
        <img src={avatar} alt="avala" 
            width="20px"
            className='rounded-full'
            />
        </div>
    </div>
  )
}

export default Message
