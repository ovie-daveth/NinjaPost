import React from 'react'
import { BsSendFill} from 'react-icons/bs'
import {ImMenu4} from 'react-icons/im'

const ChatInput = () => {

    const SendMessage = (e) => {
        e.preventDefault()
    }
  return (
    <div>
       <form className=' w-full h-[80px] relative' onSubmit={SendMessage}>
                <input type="text"
                className='w-full h-full bg-gray-700 focus:outline-none focus:bg-gray-500 placeholder:text-gray-300 placeholder:font-semibold text-gray-300 font-semibold px-6'
                placeholder='Write...'
                />
               <div className="flex items-center gap-3 absolute right-6 top-8 text-xl">
               <div className=' hover:text-gray-400 active:text-gray-300 cursor-pointer'>
                    <BsSendFill />
                </div>
                <div className='hover:text-gray-400 text-3xl active:text-gray-300 cursor-pointer'>
                    <ImMenu4 />
                </div>
               </div>
            </form>
    </div>
  )
}

export default ChatInput
