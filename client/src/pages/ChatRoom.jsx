import React, { useState } from 'react'
import avatar from '../assets/avatar.jpg'
import {AiFillFilePdf, AiFillVideoCamera, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {MdSchool, MdLocationPin, MdFacebook} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import {TiTimes} from 'react-icons/ti'
import {FaPlus} from 'react-icons/fa'
import Messages from '../components/chat/Messages'
import ChatInput from '../components/chat/ChatInput'
import PreviousPost from '../components/chat/PreviousPost'


const ChatRoom = () => {
    const [following, setFollowing] = useState(false)
    const [showPost, setShowPost] = useState(true)
    const [profileshow, profilehide] = useState(false)

    const showProfile = () =>{
        profilehide(!profileshow)
    }

    const ShowPost = () => {
      setShowPost(!showPost)
    }

    const Follow = () => {
        setFollowing(!following)
    }
  
  return (
    <div className='flex md:flex-row flex-col  gap-4 px-6 mt-3'>
       <div className={`lg:block md:w-[28%] max-h-screen overflow-y-auto scrollbar-hide order-1 md:order-[unset] ${profileshow ? 'block w-full h-[300px] md:h-screen' : 'hidden'}`}>
             <div className="bg-gray-800  flex flex-col gap-3  py-6 px-4">
                <div className='flex flex-col items-center gap-2 '> 
                    <img src={avatar} 
                    className=' rounded-full w-[70px] '
                    alt="avatar" /> 
                    <h1 className='text-gray-500'>Hey I'm David</h1>
            </div>
            <div className="block mb-4 text-sm text-center">
                <p>Frontend developer | ReactJS | Love humanity and movies</p>
            </div>
            <div className="flex flex-col gap-2 items-start">
                    <p className=' text-sm mb-1 text-gray-400 font-bold'>Author</p>
                    <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-out' to="/"><span className='text-xl'> <AiFillFilePdf /> </span> React for beginners</Link></p>
                    <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-ou' to=""><span className='text-xl'> <AiFillVideoCamera /> </span> The Complete React Coure</Link></p>
                    <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-out' to="/"><span className='text-xl'> <AiFillFilePdf /> </span> React for beginners</Link></p>
                    <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-ou' to=""><span className='text-xl'> <AiFillVideoCamera /> </span> The Complete React Coure</Link></p>
                    <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-out' to="/"><span className='text-xl'> <AiFillFilePdf /> </span> React for beginners</Link></p>
                    <p ><Link className='flex items-center text-sm text-gray-400 font-semibold gap-2 hover:text-gray-300 transition ease-in-ou' to=""><span className='text-xl'> <AiFillVideoCamera /> </span> The Complete React Coure</Link></p>
            
            </div>
            <div className="flex flex-col gap-2 items-start mt-2">
                    <p className=' text-sm mb-1 text-gray-400 font-bold'>Founder</p>
                    <p className='flex items-center text-sm text-gray-400 font-semibold gap-2'><span className='text-xl'> <MdSchool /> </span> Daveton Academy</p>
                    <p className='flex items-center text-sm text-gray-400 font-semibold gap-2'><span className='text-xl'> <MdSchool /> </span> Daveton Academy</p>
                    <p className='flex items-center text-sm text-gray-400 font-semibold gap-2'><span className='text-xl'> <MdSchool /> </span> Daveton Academy</p>
            </div>
            <div className="flex flex-col gap-2 items-start mt-2">
                    <p className=' text-sm mb-1 text-gray-400 font-bold'>Loaction</p>
                    <p className='flex items-center text-sm text-gray-400 font-semibold gap-2'><span className='text-xl'> <MdLocationPin /> </span> Warri, Delta (NG) </p>
            </div>
            <button className=' bg-gradient-to-r from-red-500 via-red-700 to-red-900 font-semibold w-full rounded-md py-1 hover:bg-gradient-to-r hover:from-red-900 hover:via-red-700 hover:to-red-500 transition-colors ease-in-out duration-500'
            onClick={Follow}
            >
                {
                    following ? 'Following' : 'Follow'
                }
            </button>
            <div className="flex gap-3 justify-center">
                <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://wwww.twitter.com/ovieomokefe"><AiFillTwitterCircle /></Link> </span>
                <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://www.facebook.com/omokefeovie"> <MdFacebook /></Link> </span>
                <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://www.instagram.com/ovieomokefe"><AiFillInstagram /></Link> </span>
                <span className='hover:text-gray-400 transition ease-in-out'> <Link to="https://www.youtube.com"><AiFillYoutube /></Link> </span>
            </div>
            </div>
       </div>
        <div className={`lg:w-[40%]  ${profileshow ? 'md:w-[70%] w-full order-2' : 'w-full'}`}>
            <div className="flex items-center justify-between bg-gray-800">
                <div className="flex gap-2 items-center p-3">
                    <img src={avatar} alt="avatar" width="30px"
                    className=' rounded-full lg:hidden'
                    onClick={showProfile}
                    />
                    <div className=' flex flex-col '>
                    <p>Omokefe Ovie David</p>
                    <small className=' italic text-[12px]'>last seen <span>3:00pm</span></small>
                    </div>
                </div>
                <p className=' pr-3 hover:text-gray-400 transition ease-in-out'><Link to="/">Back Home</Link></p>
            </div>
            <div className="flex flex-col gap-4 pt-4 lg:max-h-[485px] max-h-screen overflow-y-auto scrollbar-hide">
                <Messages />
            </div>
           <div className="block">
            <ChatInput />
           </div>
        </div>
       <div className="lg:block hidden max-h-screen overflow-y-auto scrollbar-hide  md:w-[28%]">
            <div className=''>
            <div className={`hidetimes mb-4 flex items-center gap-4 cursor-pointer  py-1 ${ !showPost ? 'border-2 border-gray-600 px-3': null}`}>
            <div className="flex gap-3 items-center hover:text-blue-600 transition ease-in-out">
            <h4 className={ `${ showPost ? 'border-b-2 border-gray-800' : null} pb-1 font-medium text-md`}><Link to='/post'>Ovie's Post</Link> </h4> 
            <span className='arrow text-lg'> <BsArrowRight /> </span>
            </div>
            <span className=' hover:rotate-90 transition-transform ease-in-out duration-200 cursor-pointer ml-auto text-2xl '
            onClick={ShowPost}
            >  { showPost ? <TiTimes 
            className='text-gray-600 text-3xl times'
            /> : <FaPlus />} </span>
            </div>
            {
                showPost &&
            <div className="flex flex-col gap-3">
               <PreviousPost />
            </div>
            }
            </div>
       </div>
        
    </div>
  )
}

export default ChatRoom
