import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className=' flex flex-col gap-2'>
         <div className="flex text-start gap-4 font-medium text-gray-400 text-md md:text-lg">
            <button className='hover:text-gray-300 border-b-2 border-transparent hover:border-gray-400 pb-1 transition ease-in-out duration-200'>Popular</button>
            <button className='hover:text-gray-300 border-b-2 border-transparent hover:border-gray-400 pb-1 transition ease-in-out duration-200'>Latest</button>
            <button className='hover:text-gray-300 border-b-2 border-transparent hover:border-gray-400 pb-1 transition ease-in-out duration-200'>Following</button>
            <button className='hover:text-gray-300 border-b-2 border-transparent hover:border-gray-400 pb-1 transition ease-in-out duration-200'>Groups</button>
          </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
