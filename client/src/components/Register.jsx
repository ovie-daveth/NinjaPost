import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({ setShowRegister, setShowLogin}) => {

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(loggedIn){
      setShowRegister(false)
      setShowLogin(true)
      window.location.reload()
    }
  }, [loggedIn])

  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const { fullname, username, email, password, password2 } = formData
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const RegisterUser = (e) =>{
    e.preventDefault()
    // console.log(JSON.stringify(formData))
    
  }
  

  // /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/
  
  return(
    <div className={`h-screen flex justify-center items-center z-10 fixed top-0 left-0 right-0 bottom-0 bg-blend-overlay sm:bg-gray-800 bg-slate-200 opacity-100 `}>
       <div className="flex items-center justify-center bg-slate-200 px-10 py-5 w-full md:w-[70%] lg:w-[50%]">
        <form className=' bg-gray-600 flex flex-col gap-3 px-4 py-8 w-full' onSubmit={RegisterUser}>
          <h1>{message}</h1>
        <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="fullname">Full Name</label>
              <input 
              required
              type="text" 
              placeholder='e.g John Doe' 
              id="fullname"
              value={fullname}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-md focus:outline-gray-400  placeholder:font-semibold placeholder:text-gray-600' />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="username">Username</label>
              <input 
              required
              type="text" 
              placeholder='e.g John_1'
              id='username'
              value={username}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-sm focus:outline-gray-400 placeholder:font-semibold placeholder:text-gray-600' />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="email">Email</label>
              <input 
              required
              type="text" 
              placeholder='e.g Johndoe1@gmail.com'
              id='email'
              value={email}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-sm focus:outline-gray-400 placeholder:font-semibold placeholder:text-gray-600' />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="password">Password</label>
              <input 
              required
              type="password" 
              placeholder='*********' 
              id="password"
              value={password}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-sm focus:outline-gray-400 placeholder:font-semibold placeholder:text-gray-600' />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="password2">Comfirm Password</label>
              <input 
              required
              type="password" 
              placeholder='*********' 
              id="password2"
              value={password2}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-sm focus:outline-gray-400 placeholder:font-semibold placeholder:text-gray-600' />
            </div>
            <div className=' flex'>
              <small className='text-center '>Already have an account? Go back and<span
             className=' font-bold cursor-pointer hover:text-red-400 transition-colors ease-in-out .4s'
             onClick={() => setShowRegister(false)}
             > Sign In </span> </small>
            </div>
            <button
            type="subit"
            className='w-full md:w-[40%] bg-orange-900 hover:bg-orange-700 text-white font-semibold text-md md:text-lg py-1 rounded-xl'
            >Register</button>
        </form>
        </div>
    </div>
  )
}

export default Register
