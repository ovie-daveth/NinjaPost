import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-3 items-center border-2 border-gray-500 p-2">
        <h1 className='text-gray-300'>Subscribe to NewsLetter from Ovie</h1>
        <small className='text-center'>Ovie would like to send you weekly tips resources to assist you</small>             <input type="email" placeholder='Subscribe with email...' className='w-full bg-gray-500 rounded-md px-3 placeholder:text-sm placeholder:text-white py-2 focus:bg-gray-600 focus:outline-none' />
        <button className='bg-blue-800 w-full py-2 rounded-sm hover:bg-blue-700'>Subscribe</button>
    </div>
  )
}

export default NewsLetter
