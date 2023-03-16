import React, { useState } from 'react'

const Comment = () => {
    const [showLikes, setShowLikes] = useState(false)

    const likeFunc = () => {
        setShowLikes(!showLikes)
    }
  return (
    <div className=' flex flex-col gap-2 text-gray-400 text-sm border-2 border-gray-300 p-2'>
        <div className='flex items-center gap-8'>
        <small className='hover:text-gray-300 cursor-pointer'>@Myke</small>
        <small className='italic'>just now</small>
        </div> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur nam quia nesciunt?</p>
      <div className='relative flex items-center gap-6 font-semibold'>
        <span className=' cursor-pointer hover:text-gray-200 transition ease-in-out' onClick={likeFunc}>Like</span>
        <div className={`flex items-center gap-2 bg-white px-2 text-blue-700 font-semibold transition-w ease-in-out duration-300 ${!showLikes ? ' w-0 overflow-hidden opacity-0' : 'w-[150px] opacity-100'} `}>
        <span className=' cursor-pointer hover:text-blue-500'>love</span>
        <span className=' cursor-pointer hover:text-blue-500'>love</span>
        <span className=' cursor-pointer hover:text-blue-500'>love</span>
        <span className=' cursor-pointer hover:text-blue-500'>love</span>
        </div>
      </div>
    </div>
  )
}

export default Comment
