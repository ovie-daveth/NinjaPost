import React, {useState} from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import {motion} from 'framer-motion'
import MeetUps from '../components/MeetUps'
import RightBar from '../components/RightBar'
import Posts from '../components/Posts'

const Home = ( {showRegister, setShowRegister, showLogin, setShowLogin} ) => {

  const [ show, hide ] = useState(false)

 
  return (
    <div className='bg-gray-900 relative'>
      <div className="flex flex-col mt-5 m-auto w-full px-5 md:w-[95%]">
        <div className="flex flex-col gap-3">
            <h3 className='text-center font-semibold'>Welcome to NP community! 👋 You're new here, but you can <span onClick={()=>hide(!show)} className=' underline hover:text-gray-500 cursor-pointer'>unlock special privileges</span> by contributing to discussions
            </h3>
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
            className={`${ show ? ' h-full ' : 'h-0 overflow-y-hidden'} transition-all ease-in-out 5s text-center font-medium italic bg-white text-black -z-10`}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, totam molestias voluptatibus beatae, illum dolor numquam, minima ipsa quos labore architecto dicta suscipit et dolorum sit error voluptates? Odio culpa sint eos corrupti iste veniam aperiam nemo unde facere eveniet odit non beatae, repudiandae alias reiciendis voluptate molestias nulla sed!</p>
            </motion.div>
        </div>

          <div className=" flex flex-col md:justify-between  md:flex-row w-full h-screen">
              <div className='md:w-[23%] order-1 md:order-[unset]'>
                <MeetUps />
              </div>
              <div className='md:w-[50%]'>
                <Posts />
              </div>
              <div className='md:w-[23%]'>
                <RightBar />
              </div>
        </div>
      </div>
    <div>
        {
          showRegister && (
            <div>
            <Register 
              showRegister={showRegister}
              setShowRegister={setShowRegister}
            />
            </div>
          )
        }
   </div>
   <div>
        {
          showLogin && (
            <div>
            <Login 
              showLogin={showLogin}
              setShowLogin={setShowLogin}
            />
            </div>
          )
        }

   </div>
   
  </div>
  )
}

export default Home
