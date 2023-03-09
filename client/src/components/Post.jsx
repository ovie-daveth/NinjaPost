import React from 'react'
import {MdKeyboardArrowUp} from 'react-icons/md'
import avatar from '../assets/avatar.jpg'

const Post = () => {


  return (
    <div className={` bg-gray-800 text-gray-200 flex gap-4 items-center justify-between py-6 px-3`}>
      
        <div> 
          <img src={avatar} 
          className=' rounded-full w-[60px] '
          alt="avatar" /> 
        </div>
        <div className='showLike font-medium relative'> 
          <MdKeyboardArrowUp 
          className='font-bold text-xl hover:text-gray-500 cursor-pointer'
          />
          <small className={`absolute -bottom-4 -left-2 text-gray-400`}>Likes</small>
          <p className=' -mt-1 hover:text-gray-500 cursor-pointer'> 54</p>
        </div>
      
      <div className=' flex flex-col gap-3'>
        <div>
          <h3 className=' text-md md:text-lg leading-5 font-semibold'>The golden templates for React developmet (The Nigeria seetings)</h3>
        </div>
        <div className=' flex items-center gap-0 text-sm md:text-md font-semibold'>
         
            <span className='text-gray-500 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>@Oviedavid</span>
            <span className='text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
            <span className='text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
          
        </div>
      </div>
    </div>
  )
}

export default Post
