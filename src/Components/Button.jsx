import React from 'react'

function Button({iconUrl,lable}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4
     border font-montserrat bg-coral-red rounded-full text-white border-coral-red'>
        {lable}
        <img src={iconUrl} alt="arrow right" className='ml-2 rounded-full w-5 h-5' />
    </button>
  )
}

export default Button