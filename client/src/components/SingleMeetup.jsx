import React from 'react'
import { Link } from 'react-router-dom'

const SingleMeetup = () => {
  return (
   <Link to="/">
    <div className=' group hover:bg-gray-800 px-1 py-2 transition ease-in-out flex gap-1 items-center'>
      <div className=' group-hover:bg-blue-600 px-2 py-[3px] text-center font-medium flex flex-col  bg-gray-600 rounded-sm'>
        <small className='text-[11px] -mb-1'>MAR</small>
        <small className='group-hover:text-white text-gray-800'>10</small>      
      </div>
      <div className=' font-semibold'>
        <h3 className=' -mb-1'>Nigeria Google developers ...</h3>
        <small className='text-gray-400 group-hover:text-blue-400 text-sm'>Warri, Delta State</small>
      </div>
    </div>
   </Link>
  )
}

export default SingleMeetup
