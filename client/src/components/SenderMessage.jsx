import React, { useState } from 'react'
import avatar from '../assets/avatar.jpg'
import {TiFlash} from 'react-icons/ti'

const SenderMessage = () => {
    const [seen, setSeen] = useState(true)
  return (
    <div className=' flex items-center justify-between px-3 bg-gray-800 text-gray-400 gap-4 font-medium w-[80%] py-2'>
        <div className="flex">
            <img src={avatar} alt="avala" 
            width="20px"
            className='rounded-full'
            />
        </div>
        <div className="flex flex-col">
            <p>hello..!</p>
            <small className='flex items-center gap-1'><span className='italic text-[12px]'>just now</span><span className={`${ seen ? 'text-orange-600': 'text-gray-400'}`}><TiFlash /></span></small>
        </div>
    </div>
  )
}

export default SenderMessage
