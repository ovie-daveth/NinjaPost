import React from 'react'

const Register = () => {
  return (
    <div className=' -z-10 fixed top-0 left-0 right-0 bottom-0 bg-blend-overlay bg-black opacity-70'>
       <div className="flex items-center justify-center mt-10 ">
        <form className=' bg-gray-400 flex flex-col gap-3'>
            <div className="flex flex-col">
              <label htmlFor="name">Username</label>
              <input type="text" placeholder='Enter Username' className=' bg-slate-300 rounded-md' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Username</label>
              <input type="text" placeholder='Enter Username' className=' bg-slate-300 rounded-md' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Username</label>
              <input type="text" placeholder='Enter Username' className=' bg-slate-300 rounded-md' />
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register
