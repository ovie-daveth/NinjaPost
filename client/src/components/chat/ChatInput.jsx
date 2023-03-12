import React, { useState } from 'react'
import { BsSendFill, BsFilePdfFill} from 'react-icons/bs'
import {ImMenu4} from 'react-icons/im'
const ChatInput = () => {
    const [ShowFile, HideFile] = useState(false)

    const SendMessage = (e) => {
        e.preventDefault()
    }
  return (
    <div>
       <form className=' w-full h-[80px] relative' onSubmit={SendMessage}>
                <input type="text"
                className='w-full h-full bg-gray-700 focus:outline-none focus:bg-gray-500 placeholder:text-gray-300 placeholder:font-semibold text-gray-300 font-semibold px-6 border-t-2 border-gray-400'
                placeholder='Write...'
                />
               <div className="flex items-center gap-3 absolute right-6 top-8 text-xl">
                    <div className=' hover:text-gray-400 active:text-gray-300 cursor-pointer'>
                        <BsSendFill />
                    </div>
                    <div className='relative '>
                        <div className="block hover:text-gray-400 text-3xl active:text-gray-300 cursor-pointer"
                        onClick={() => HideFile(!ShowFile)}
                        >
                        <ImMenu4 />
                        </div>
                        <div className={`transition ease-in-out duration-500 flex flex-col gap-3 absolute -top-[7.5rem] bg-slate-50 rounded-md px-2 py-3 ${ ShowFile ? 'opacity-100' : 'opacity-0'} `}>
                            <div className="block text-2xl ">
                                <BsFilePdfFill 
                                className='text-gray-600  hover:text-gray-500'
                                />
                            </div>
                            <div className="block text-2xl ">
                                <BsFilePdfFill 
                                className='text-gray-600  hover:text-gray-500'
                                />
                            </div>
                            <div className="block text-2xl ">
                                <BsFilePdfFill 
                                className='text-gray-600  hover:text-gray-500'
                                />
                            </div>
                        </div>
                    </div>
               </div>
            </form>
    </div>
  )
}

export default ChatInput
