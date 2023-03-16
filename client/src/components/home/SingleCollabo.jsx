import React from 'react'
import {BsCodeSlash} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SingleCollabo = () => {
  return (
    <Link to="/collabo" className='flex gap-1 text-gray-400'>
      <span className=' text-xl text-gray-300'> <BsCodeSlash /> </span>
      <p className=' text-sm'>Looking for a patner in a React Project</p>
      <span className=' ml-auto text-sm italic'>1d</span>
    </Link>
  )
}

export default SingleCollabo
