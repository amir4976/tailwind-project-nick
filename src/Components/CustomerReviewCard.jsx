import React from 'react'
import { star } from '../assets/icons'
function CustomerReviewCard({imgURL,customerName, rating,  feedback}) {
  return (
    <div className='w-full bg-white rounded-[10px] flex justify-center items-center flex-col shadow-3xl p-10'>
        <img src={imgURL} alt="customer" width={100} height={100} className='rounded-full mt-5' />
        <p className='font-bold font-montserrat mt-4'>{customerName}</p>
        <p className='text-center text-sm info-text mt-3'>{feedback}</p>
        <div className="flex justify-center items-center">
            <img src={star} alt="star" className='w-5 mx-2' />
            <p >
                ({rating})
            </p>
        </div>
    </div>
  )
}

export default CustomerReviewCard
