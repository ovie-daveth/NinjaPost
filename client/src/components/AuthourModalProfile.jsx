import React from 'react'
import avatar from '../assets/avatar.jpg'

const AuthourModalProfile = () => {
  return (
    <div className=' flex flex-col gap-2 bg-gray-400 px-3 w-[300px] '>
        <div > 
            <img src={avatar} 
            className=' rounded-full w-[40px] '
            alt="avatar" /> 
      </div>
      Author Modal Profile
    </div>
  )
}

export default AuthourModalProfile
