import React, { useState } from 'react'
import avatar from '../assets/avatar.jpg'
import {AiFillFilePdf, AiFillVideoCamera, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {MdSchool, MdLocationPin, MdFacebook} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowUp} from 'react-icons/md'
import {BsArrowRight, BsSendFill} from 'react-icons/bs'
import {TiTimes} from 'react-icons/ti'
import {FaPlus} from 'react-icons/fa'
import SenderMessage from '../components/SenderMessage'
import ReceiverMessage from './ReceiverMessage'

const ChatRoom = () => {
    const [following, setFollowing] = useState(false)
    const [ShowLike, setShowLike] = useState(false)
    const [showPost, setShowPost] = useState(true)

    const ShowPost = () => {
      setShowPost(!showPost)
    }

  const showLike = () => {
    setShowLike(!ShowLike)
  }
  const HideLike = () => {
    setShowLike(!ShowLike)
  }

    const Follow = () => {
        setFollowing(!following)
    }
    const SendMessage = (e) => {
        e.preventDefault()
    }

  return (
    <div className='flex  gap-4 px-6 py-3'>
        <div className="bg-gray-800  flex flex-col gap-3 w-[28%] py-6 px-4">
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
        <div className=' w-[40%]  h-[500px]'>
            <div className="flex gap-2 items-center p-3 bg-gray-800">
                <img src={avatar} alt="avatar" width="30px"
                className=' rounded-full'
                />
                <p>Jade Uchenna</p>
            </div>
            <div className="message block overflow-y-auto px-5 scrollbar-hide whitespace-nowrap h-[420px]">
                <div className="flex  flex-col gap-4 pt-4  ">
                    <div className="w-full text-start">
                        <SenderMessage />
                    </div>
                    <div className="w-full flex justify-end">
                        <ReceiverMessage />
                    </div>
                </div>
            </div>
            <form className=' w-full h-[80px] relative' onSubmit={SendMessage}>
                <input type="text"
                className='w-full h-full bg-gray-700 focus:outline-none focus:bg-gray-500 placeholder:text-gray-300 placeholder:font-semibold text-gray-300 font-semibold px-6'
                placeholder='Write...'
                />
                <button className='absolute right-6 top-8 text-xl active:text-gray-300 cursor-pointer'>
                    <BsSendFill />
                </button>
            </form>

        </div>
        <div className=' w-[28%]'>
        <div className={`hidetimes mb-4 flex items-center gap-4 cursor-pointer  py-1 ${ !showPost ? 'border-2 border-gray-600 px-3': null}`}>
         <div className="flex gap-3 items-center hover:text-blue-600 transition ease-in-out">
         <h4 className={ `${ showPost ? 'border-b-2 border-gray-800' : null} pb-1 font-medium text-md`}><Link to='/'>Ovie's Post</Link> </h4> 
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
           <div className='bg-gray-800 flex flex-col px-3 py-2'>
                <div>
                    <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'>The golden templates for React developmet...</h4>
                </div>
                <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
                    <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
                    <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
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
                </div>
            </div>
            <div className='bg-gray-800 flex flex-col px-3 py-2'>
                <div>
                    <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'>The golden templates for React developmet...</h4>
                </div>
                <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
                    <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
                    <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
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
                </div>
            </div>
            <div className='bg-gray-800 flex flex-col px-3 py-2'>
                <div>
                    <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'>The golden templates for React developmet...</h4>
                </div>
                <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
                    <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
                    <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
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
                </div>
            </div>
            <div className='bg-gray-800 flex flex-col px-3 py-2'>
                <div>
                    <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'>The golden templates for React developmet...</h4>
                </div>
                <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
                    <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
                    <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
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
                </div>
            </div>
            <div className='bg-gray-800 flex flex-col px-3 py-2'>
                <div>
                    <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'>The golden templates for React developmet...</h4>
                </div>
                <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
                    <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
                    <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
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
                </div>
            </div>
            <div className='bg-gray-800 flex flex-col px-3 py-2'>
                <div>
                    <h4 className=' text-sm md:text-[16px] transition ease-in-out duration-200 cursor-pointer px-1 py-1 hover:bg-gray-700'>The golden templates for React developmet...</h4>
                </div>
                <div className=' flex items-center gap-0 text-sm md:text-md font-semibold group-hover:text-white'>
                    <span className='comments text-gray-300 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>ReactJs</span>
                    <span className='comments text-gray-400 hover:bg-gray-700 px-3 transition ease-in-out cursor-pointer'>34 comments</span>
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
                </div>
            </div>
           </div>
           }
        </div>
        
    </div>
  )
}

export default ChatRoom
