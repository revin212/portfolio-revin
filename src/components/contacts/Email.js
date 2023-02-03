import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { useRef } from 'react';

export default function Email() {
  const [state, handleSubmit] = useForm("mbjedbgo");
  const [isSucceeded, setIsSucceeded] = useState(state.succeeded);
  const formRef = useRef();

  if (isSucceeded) {
      alert('Thanks for the message!')
      setIsSucceeded(false)
      formRef.current.reset();
  }

  return (
    <div className="email-wrapper max-w-[1132px] mx-auto">
        <h2 className='projects-title font-bold text-[2.8rem] text-center mb-[1.5rem] lg:mb-[3rem]'>
                EMAIL ME
        </h2>
        <form onSubmit={
            async (e)=>{
                try{await handleSubmit(e); setIsSucceeded(true)}
                catch(err){console.log(err)}
            }
        }
            className='flex flex-col'
            ref={formRef}
        >
        <label htmlFor="email" className='font-semibold mb-2'>
            Your Email Address
        </label>
        <input
            required
            id="email"
            type="email" 
            name="email"
            className=' bg-neutral-dark-gray w-full mb-[1rem] py-2 px-4 outline-none focus:bg-neutral-dark-gray'            
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label htmlFor="subject" className='font-semibold mb-2'>
            Subject
        </label>
        <input 
            id="subject"
            name="subject" 
            type="text" 
            className=' bg-neutral-dark-gray w-full mb-[1rem] py-2 px-4 outline-none'            
        />
        <label htmlFor="message" className='font-semibold mb-2'>
            Message
        </label>
        <textarea
            required
            id="message"
            name="message"
            rows={10}           
            className=' bg-neutral-dark-gray w-full mb-[2rem] py-2 px-4 outline-none'
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <div className="submit lg:w-full lg:flex lg:justify-end">
            {!state.submitting?
            <button type="submit" disabled={state.submitting} 
                className=' font-semibold bg-neutral-dark-gray hover:bg-neutral-400 hover:text-main-black rounded-md py-2 w-full lg:w-[300px]'
            >
                Send
            </button>
            :
            <div className="sending font-semibold text-center bg-neutral-dark-gray rounded-md py-2 w-full lg:w-[300px]">Sending...</div>
            }
            
        </div>
        </form>
    </div>
  )
}