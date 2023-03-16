import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'

const SimilarPost = () => {
  return (
    <Link to="/post" className='flex items-start gap-3'>
        <img src={avatar} alt="" 
        className='w-[40px] rounded-full'
        />
        <div className="flex flex-col gap-1">
            <h1>The Beautiful Things about Raect Native</h1>
            <small>Omokefe Ovie - 21 March</small>
        </div>
    </Link>
  )
}

export default SimilarPost
