import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import SingleMeetup from './SingleMeetup'
import space from '../assets/store.jpg'
import {TiTimes} from 'react-icons/ti'
import {FaPlus} from 'react-icons/fa'

const MeetUps = () => {

  const [showPost, setShowPost] = useState(false)

  const ShowPost = () => {
    setShowPost(!showPost)
  }

  return (
    <div className=' flex flex-col gap-3 px-3 py-3'>
        <div className={`hidetimes flex items-center gap-4 font-bold cursor-pointer px-3 py-1 ${ !showPost ? 'border-2 border-gray-600': null}`}>
         <div className="flex gap-4 items-center hover:text-blue-600 transition ease-in-out">
         <h3 className={ `${ showPost ? 'border-b-4 border-gray-800' : null} pb-1`}><Link to='/'>MeetUps</Link> </h3> 
          <span className='arrow text-lg'> <BsArrowRight /> </span>
         </div>
          <span className=' hover:rotate-90 transition-transform ease-in-out duration-200 cursor-pointer ml-auto text-2xl '
          onClick={ShowPost}
          >  { showPost ? <TiTimes 
          className='text-gray-600 text-3xl times'
          /> : <FaPlus />} </span>
        </div>
        <div className={`${ showPost ? 'h-full' : 'h-0 overflow-y-hidden'} transition ease-in-out flex flex-col gap-3`}>
        <SingleMeetup />
        <SingleMeetup />
        <SingleMeetup />
        <SingleMeetup />
        <SingleMeetup />
        <SingleMeetup />
        <SingleMeetup />
        </div>
        <div className='relative border-4 border-gray-700 flex items-center justify-center'>
          <img src={space} 
          width="95%" 
          className=' my-1'
          alt="space" />
          <div className=' absolute bg-red-700 font-bold px-6 py-1 rounded-sm shadow-yellow-50 shadow-sm'>
             <h3>CHECK ON OUR STORE</h3> 
          </div>
        </div>
    </div>
  )
}

export default MeetUps
