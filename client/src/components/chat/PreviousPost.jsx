import React, { useState } from 'react'
import {MdKeyboardArrowUp} from 'react-icons/md'


const PreviousPost = () => {
    const [ShowLike, setShowLike] = useState(false)

    
  const showLike = () => {
    setShowLike(!ShowLike)
  }
  const HideLike = () => {
    setShowLike(!ShowLike)
  }
  return (
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
  )
}

export default PreviousPost
