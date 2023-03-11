import React, {useEffect, useState} from 'react'
import Axios from 'axios'


const Login = ( {setShowLogin, setIsLoggedIn} ) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const {username, email, password } = formData

  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  useEffect(() => {
    if(loggedIn){
      setShowLogin(false)
      setIsLoggedIn(true)
    }
  }, [loggedIn])

  const LoginUser = (e) =>{
    e.preventDefault()
    Axios.post('http://localhost:8800/login', {
      username: username,
      password: password
    })
    .then(response => {
      setMessage(response.data.message);
      setLoggedIn(!loggedIn)
    })
    .catch(error => {
      setMessage(error.response.data.message);
    });

  }

  const [forgotpassword, setForgotPasword ] = useState(false)
  return (
    <>
    <div className=' flex justify-center items-center z-10 fixed top-0 left-0 right-0 bottom-0 bg-blend-overlay sm:bg-gray-800 bg-white opacity-100'>
       <div className="flex items-center justify-center bg-white px-10 py-10 w-full md:w-[70%] lg:w-[50%]">
        <form className=' bg-gray-600 flex flex-col gap-3 p-2 md:p-5 w-full' onSubmit={LoginUser}>
          <h1>{message}</h1>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="uname">Username</label>
              <input type="text" 
              required
              placeholder='e.g John_1'
              id='username'
              value={username}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-dm placeholder:font-semibold placeholder:text-gray-600 focus:outline-gray-400 ' />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-md md:text-lg" htmlFor="password">Password</label>
              <input type="password" 
              required
              placeholder='*********' 
              id="password"
              value={password}
              onChange={onChange}
              className=' bg-slate-300 rounded-md w-full px-3 py-1 placeholder:text-dm placeholder:font-semibold placeholder:text-gray-600 focus:outline-gray-400 ' />
            </div>
            <div className='flex'>
              <small className=' text-center'>Don't have an account? Go back and <span
             className=' font-bold cursor-pointer hover:text-red-400 transition-colors ease-in-out .4s'
             onClick={() => setShowLogin(false)}
             > Register </span></small>
            </div>
            <button
            type="subit"
            className='w-full md:w-[40%] bg-orange-900 hover:bg-orange-700 text-white font-semibold text-md md:text-lg py-1 rounded-xl'
            >Login</button>
            <small 
            onClick={() => setForgotPasword(true)}
            className='text-center font-semibold hover:text-red-400 cursor-pointer'>Forgot pasword?</small>
        </form>
        </div>
        
    </div>

    {
          forgotpassword && (

            <div className='h-screen flex flex-col justify-center items-center z-10 fixed top-0 left-0 right-0 bottom-0 bg-blend-overlay sm:bg-gray-800 bg-slate-200 opacity-100'>
            <div className="relative flex items-center justify-center bg-slate-200 px-7 py-7 w-full md:w-[70%] lg:w-[50%]">
            <span className='text-orange-400 text-3xl font-bold z-50 absolute top-1 right-5 bg-slate-200 rounded-full p-2 cursor-pointer'
            onClick={() => setForgotPasword(false)}
            >x</span>
                <form className=' bg-gray-600 flex flex-col gap-3 px-6 py-8 md:p-5 w-full'>
                  <h2 className=' font-semibold text-center'>Change Password</h2>
                  <small className=' font-medium text-center text-orange-400'>A link will be sent to your email when you click the 'Request Link' with your email</small>
                  <div className="flex flex-col gap-2">
                    <label className=' font-semibold' htmlFor="email"> Enter Email used to register </label>
                    <input type="email" 
                           value={email}
                           onChange={onChange}
                           id="email"
                    placeholder='eg johndoe123@gmail.com'
                    className=' placeholder:text-gray-500 px-3 py-2 rounded-md focus:outline-gray-500 w-full'
                    required
                    />
                  </div>
                  <button
                  type='submit'
                  className=' w-full md-w-[40%] bg-orange-900 hover:bg-orange-700 text-white font-semibold text-md md:text-lg py-1 rounded-xl'
                  >Request Link</button>
                
                </form>
            </div>
            </div>
          )
          
        }

    </>
  )
}

export default Login
