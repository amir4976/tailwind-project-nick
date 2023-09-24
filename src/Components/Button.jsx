import React from 'react'

function Button({iconUrl,lable,fullWidth}) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 ${fullWidth?  'w-full' : ''}
     border font-montserrat bg-coral-red rounded-full text-white border-coral-red`}>
        {lable}
        {iconUrl ? (<img src={iconUrl} alt="arrow right" className='ml-2 rounded-full w-5 h-5' />): ''}
    </button>
  )
}

export default Button
