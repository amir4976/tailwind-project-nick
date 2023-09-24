import React from 'react'
import Button from '../Components/Button'
function Subscribe() {
  return (
    <section className='max-container flex  justify-between  items-center flex-wrap max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        sign up from <span className='text-coral-red'>update</span> & newslerrer 
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-400 rounded-full ">
        <input type="text"
        placeholder='subscribe@ ' className='input'/
        >
          <div className="flex max-sm: justify-center items-center max-sm:w-full">
            <Button lable='sing up' fullWidth />
          </div>
      </div>
    </section>
  )
}

export default Subscribe
