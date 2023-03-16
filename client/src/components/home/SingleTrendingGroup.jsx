import React, { useState } from 'react'
import {CgCommunity} from 'react-icons/cg'
import {Link, useNavigate} from 'react-router-dom'

const SingleTrendingGroup = () => {

    const navigate = useNavigate()
    const [joined, setJoined] = useState(false)

    const joinGroup = () => {
        setJoined(true)
        if(joined === true){
            navigate('/group')
        }
    }

  return (
    <div className='group flex justify-between  hover:bg-gray-800 rounded-md py-1 transition ease-in-out cursor-pointer'>
        <Link to="/group" className="flex gap-1 items-center">
            <div className="group-hover:bg-green-900 transition ease-in-out duration-300 bg-green-800 flex items-center justify-center rounded-full p-[4px] text-lg">
                <CgCommunity />
            </div>
            <p className=''>Product Management</p>
        </Link>
        <div className="block text-sm py-1 bg-gray-700 px-2 rounded-2xl text-white cursor-pointer"
        onClick={joinGroup}
        >
           {
            !joined ? ' Join' : "View"
           }
        </div>
      
    </div>
  )
}

export default SingleTrendingGroup
