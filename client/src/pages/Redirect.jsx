import React from 'react'
import { Link } from 'react-router-dom'


const Redirect = () => {
  return <section className=' flex gap-5 items-center justify-center translate-y-52'>
    <h1>Hey, you have to Login</h1>
    <button className='bg-red-400 px-5 py-2 rounded-sm hover:bg-red-500'><Link to="/">Go back</Link></button>
    </section>
}

export default Redirect
