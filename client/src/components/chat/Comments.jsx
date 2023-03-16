import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import {TiTimes} from 'react-icons/ti'
import {FaPlus} from 'react-icons/fa'
import SingleCollabo from '../home/SingleCollabo'
import Comment from './Comment'

const Comments = () => {

  const [showPost, setShowPost] = useState(true)

  const ShowPost = () => {
    setShowPost(!showPost)
  }

  return (
    <div className=' flex flex-col gap-3 px-3'>
        <div className={`hidetimes flex items-center gap-4 cursor-pointer  py-1 md:w-[25%] ${ !showPost ? 'border-2 border-gray-600 px-3': null}`}>
         <div className="flex gap-3 items-center">
         <h4 className={ `${ showPost ? 'border-b-2 border-gray-800' : null} pb-1 font-medium text-md`}>Comments <span>(12)</span></h4> 
         </div>
          <span className=' hover:rotate-90 transition-transform ease-in-out duration-200 cursor-pointer ml-auto text-2xl '
          onClick={ShowPost}
          >  { showPost ? <TiTimes 
          className='text-gray-600 text-3xl times'
          /> : <FaPlus />} </span>
        </div>
        <div className={`${ showPost ? 'h-full' : 'h-0 overflow-y-hidden'} transition ease-in-out flex flex-col gap-3`}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
       
        </div>
        <div className="block">
          
        </div>
    </div>
  )
}

export default Comments
