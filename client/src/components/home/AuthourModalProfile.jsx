import React from 'react'
import {AiFillFilePdf, AiFillVideoCamera, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {MdSchool, MdLocationPin, MdFacebook} from 'react-icons/md'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'

const AuthourModalProfile = ( {modalHide} ) => {
  return (
    <div className=' flex flex-col gap-2 bg-gray-700 px-3 w-[300px] py-3'>
      <span className=' hover:text-gray-400 cursor-pointer'
      onClick={modalHide}
      ><FaTimes /></span>
        <div className=' flex items-center justify-center'> 
            <img src={avatar} 
            className=' rounded-full w-[40px] '
            alt="avatar" /> 
      </div>
      <div className="flex flex-col items-center text-gray-400 font-semibold">
        <h1>Omokefe Ovie David</h1>
        <small class="group relative text-center cursor-pointer"><Link to="/chat" className='flex items-center gap-1 '><span><BsFillChatSquareTextFill /></span>@oviedavid </Link>
        <small className='group-hover:opacity-100 absolute -bottom-3 transition ease-in-out duration-300 bg-white rounded px-1 opacity-0 block'>Let's Chat</small>
        </small>
      </div>
      <div className="block mb-4 text-sm text-center">
        <p>Frontend developer | ReactJS | Love humanity and movies</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
            <p className=' text-sm mb-1 text-gray-400 font-bold'>Author</p>
            <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-out' to="/"><span className='text-xl'> <AiFillFilePdf /> </span> React for beginners</Link></p>
            <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-ou' to=""><span className='text-xl'> <AiFillVideoCamera /> </span> The Complete React Coure</Link></p>
    
      </div>
      <div className="flex flex-col gap-2 items-start mt-2">
            <p className=' text-sm mb-1 text-gray-400 font-bold'>Founder</p>
            <p className='flex items-center text-sm text-gray-400 font-semibold gap-2'><span className='text-xl'> <MdSchool /> </span> Daveton Academy</p>
      </div>
      <div className="flex flex-col gap-2 items-start mt-2">
            <p className=' text-sm mb-1 text-gray-400 font-bold'>Loaction</p>
            <p className='flex items-center text-sm text-gray-400 font-semibold gap-2'><span className='text-xl'> <MdLocationPin /> </span> Warri, Delta (NG) </p>
      </div>
      <button className=' bg-gradient-to-r bg-red-600 w-full rounded-md py-1'>Follow</button>
      <div className="flex gap-3 justify-center">
        <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://wwww.twitter.com/ovieomokefe"><AiFillTwitterCircle /></Link> </span>
        <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://www.facebook.com/omokefeovie"> <MdFacebook /></Link> </span>
        <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://www.instagram.com/ovieomokefe"><AiFillInstagram /></Link> </span>
        <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://www.youtube.com"><AiFillYoutube /></Link> </span>
      </div>
    </div>
  )
}

export default AuthourModalProfile
