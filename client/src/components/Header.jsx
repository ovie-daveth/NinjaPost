import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import {FaSearch} from 'react-icons/fa'
import avatar from '../assets/ninja.png'
import { FaComments, FaStoreAlt } from 'react-icons/fa'
import {AiFillDatabase} from 'react-icons/ai'
import {BsMicFill, BsArrowRightShort} from 'react-icons/bs'
import {SiGotomeeting} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
import {MdNotifications} from 'react-icons/md'
import {GoSettings} from 'react-icons/go'
import {RiLogoutCircleRLine, RiRegisteredFill, RiLoginCircleFill} from 'react-icons/ri'


import {motion} from 'framer-motion'






const Header = ( { showLog, showSignin, setIsLoggedIn, isLoggedIn } ) => {

  const [searchValue, setSearchValue] = useState('')
  const [Open, Close] = useState(false)
  const [hide, show] = useState(true)
  const [hidepro, showpro] = useState(true)
  
 
  const LogOut = () => {
    setIsLoggedIn(false)
  }

  
  const HideProfile = ()=>{
    showpro(!hidepro)

  }
  

  const HideMenu = () => {
    show(!hide)
  }

  const submenu = [
    {
        name: 'COMMUNITY',
        subname: 'Connect with other creators and developers',
        icon: <FaComments />,
        path: '/',
        id: 1,
        color: 'darkred'
    },
    {
        name: 'PRODUCTS',
        subname: 'Connect with other creators and developers',
        icon: <AiFillDatabase />,
        path: '/create',
        id: 2,
        color: 'blue'
    },
    {
        name: 'PODCAST',
        subname: 'Connect with other creators and developers',
        icon: <BsMicFill />,
        path: '/',
        id: 3,
        color: 'orange'
    },
    {
        name: 'MEETUPS',
        subname: 'Connect with other creators and developers',
        icon: <SiGotomeeting />,
        path: '/',
        id: 4,
        color: 'green'
    },
    {
        name: 'STORE',
        subname: 'Connect with other creators and developers',
        icon: <FaStoreAlt />,
        path: '/',
        id: 5,
        color: 'purple'
    },
    {
        name: 'NEWSLETTER',
        subname: 'Connect with other creators and developers',
        icon: <FaStoreAlt />,
        path: '/',
        id: 6,
        color: 'goldenrod'
    },
]

  const open = () => {
    Close(!Open)
  }
  const onChange = (e) =>{
    setSearchValue(e.target.value)
  }
  const menu = [
    {
      name:'Start Here',
      path: '/start',
      id: 1
    },
    {
      name:'Explore',
      path: '/explore',
      id: 2
    },
   
  ]
  return (
    <header className=' bg-gray-800 mt-2 text-white font-medium'>
      <div className="flex items-center justify-between m-auto py-3 px-8">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col relative">
          <div className="block text-gray-400 hover:text-white transition-colors ease-in-out .4s text-2xl">
              <BiMenu 
              type={'button'}
              onClick={HideMenu}
              />
          </div>
          <ul className={` z-30 bg-gray-500 text-gray-300 px-4 py-3 ${ hide ? 'hidden' : 'flex'} flex-col gap-10 absolute top-8 left-0 w-[400px]`}>
            {
              submenu.map((item) => (
                <li key={item.id}>
                <Link className='submenu  flex items-center gap-3' to={item.path}>
                <div  style={{backgroundColor: `${item.color}`}} className={`flex items-center justify-center w-[40px] h-[40px] rounded-full `}>{item.icon} </div>
                <div className="flex flex-col">
                    <h1 className='name flex items-center gap-3 w-[200px]' style={{color: `${item.color}`}}>{item.name} <span className=' ml-auto text-3xl'> <BsArrowRightShort /> </span></h1>
                    <p className='text-sm'> {item.subname} </p>
                </div>
                </Link>
           </li>
              ))
            }
          </ul>
          </div>
           <div className=" md:flex gap-5 hidden">
           {
              menu.map((item) => (
                <p className='text-gray-400 text-sm hover:text-white transition-colors ease-in-out .4s' key={item.id}><Link to={item.path}>{item.name}</Link></p>
              ))
            }
           </div>
           
        </div>
          <Link to='/' className=" flex items-center gap-2">
            <div className="bg-white text-black  px-1">
              <h2>NP</h2>
            </div>
            <h1 className='md:text-md text-md'>Ninja<span className=' text-white'>POST</span></h1>
          </Link>
           
        <div className="flex gap-5 items-center">
            <div className="flex relative">
              <input type="search"
            className={`absolute top-0 bottom-0 right-6  bg-gray-400 text-white text-sm rounded-l-xl placeholder:text-white px-3 py-2 focus:outline-none tracking-wider transition-all ease-in-out .5s ${ !Open ? ' w-0 ' : 'w-[200px]'}`}
              placeholder={`Search site...`}
              id="search"
              value={searchValue}
              onChange={onChange}
              />
              <label htmlFor="search" className=' bg-gray-400 px-2 py-2 flex items-center justify-center -ml-1 rounded-r-xl'
              onClick={open}
              >
                <FaSearch />
              </label>
            </div>
           {
            isLoggedIn ? (
              <div className="relative bg-gray-400 w-[40px] h-[40px] rounded-full flex items-center justify-center p-[5px] border-gray-200 border-2">
              <motion.img
              whileTap={{ scale: 1.2 }}
              src={avatar} width="30px" height="30px" alt="" 
              onClick={HideProfile}
              />
              <ul className={`z-30 flex-col gap-5 bg-gray-500 text-gray-300 py-3 absolute top-10 -right-6 w-[240px] ${ hidepro ? 'hidden' : 'flex'}`}>
                <li className='profile flex gap-3 items-center'>
                  <p className=' text-2xl'><CgProfile /></p>
                  <h3 className='flex gap-3 items-center text-md'>PROFILE <motion.span
                  animate={{ translateX: 5 }}
                  transition={{ ease: "linear", duration: .8, repeat: Infinity }}
                  className='text-2xl'><BsArrowRightShort /></motion.span></h3>
                </li>
                <li className='profile flex gap-3 items-center'>
                  <p className=' text-2xl'><MdNotifications /></p>
                  <h3 className='flex gap-3 items-center text-md'>NOTIFICATIONS <motion.span
                  animate={{ translateX: 5 }}
                  transition={{ ease: "linear", duration: .8, repeat: Infinity }}
                  className='text-2xl'><BsArrowRightShort /></motion.span></h3>
                </li>
                <li className='profile flex gap-3 items-center'>
                  <p className=' text-2xl'><GoSettings /></p>
                  <h3 className='flex gap-3 items-center text-md'>SETTINGS <motion.span
                  animate={{ translateX: 5 }}
                  transition={{ ease: "linear", duration: .8, repeat: Infinity }}
                  className='text-2xl'><BsArrowRightShort /></motion.span></h3>
                </li>
            
                
                  <li className='profile flex gap-3 items-center'
                  onClick={LogOut}
                  >
                  <p className=' text-2xl'><RiLogoutCircleRLine /></p>
                  <h3 className='flex gap-3 items-center text-md'>SIGNOUT <motion.span
                  animate={{ translateX: 5 }}
                  transition={{ ease: "linear", duration: .8, repeat: Infinity }}
                  className='text-2xl'><BsArrowRightShort /></motion.span></h3>
                </li>
               
              </ul>
            </div>
            ) :
            (
              <>
              <button
              onClick={showSignin}
              >Login</button>
              <button
               onClick={showLog}
              >SignUp</button>
              </>
            )
           }
        </div>
      </div>
    </header>
  )
}

export default Header
