import React, { useState } from 'react'
import {MdKeyboardArrowUp} from 'react-icons/md'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'
import AuthourModalProfile from './AuthourModalProfile'

const Post = () => {

  const [showModal, setShowModal] = useState(false)
  const [ShowLike, setShowLike] = useState(false)

  const modalShow = () => {
    setShowModal(!showModal)
  }
  const modalHide = () => {
    setShowModal(false)
  }

  const showLike = () => {
    setShowLike(!ShowLike)
  }
  const HideLike = () => {
    setShowLike(!ShowLike)
  }

  return (
      <section className='Apost relative'>
          <div className=" z-10 absolute -top-10">   
         
             {
              showModal &&   <AuthourModalProfile 
              modalHide={modalHide}
              />
             }
          
          </div>
         
        <div className={` bg-gray-800 text-gray-200 flex gap-4 items-center py-4 px-3`}>
      
      <div> 
        <img src={avatar} 
        className=' rounded-full w-[40px] '
        alt="avatar" /> 
      </div>
      <div className='  group relative flex flex-col justify-center items-center '
      onMouseEnter={showLike}
      onMouseLeave={HideLike}
      > 
          <MdKeyboardArrowUp 
          className='group-hover:text-blue-800 transition ease-out text-xl cursor-pointer'
          />
          { ShowLike && <small className={`absolute -bottom-2 -right-10 bg-white text-gray-600 font-semibold px-1`}>Likes</small>}
          <p className=' -mt-1 cursor-pointer'> 54</p>
      </div>
    
    <div className=' flex flex-col gap-1'>
      <div>
        <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'><Link to="/post">The golden templates for React developmet (The Nigeria seetings)</Link></h4>
      </div>
      <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
       
          <span className='comments text-gray-500 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'
          onClick={modalShow}   
          > @Oviedavid </span>
          <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
          <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
        
      </div>
    </div>
       </div>
      </section>
  )
}

export default Post
