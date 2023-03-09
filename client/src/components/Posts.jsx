import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className=' flex flex-col gap-2'>
         <div className="flex text-start gap-4 font-semibold text-gray-400 text-md md:text-lg">
            <button className='hover:text-gray-300 border-b-4 border-transparent hover:border-gray-400 pb-1'>Popular</button>
            <button className='hover:text-gray-300 border-b-4 border-transparent hover:border-gray-400 pb-1'>Latest</button>
            <button className='hover:text-gray-300 border-b-4 border-transparent hover:border-gray-400 pb-1'>Following</button>
            <button className='hover:text-gray-300 border-b-4 border-transparent hover:border-gray-400 pb-1'>Groups</button>
          </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
