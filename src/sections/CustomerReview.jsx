import React from 'react'
import {reviews} from '../constants'
import CustomerReviewCard from '../Components/CustomerReviewCard'
function CustomerReview() {
  return (
    <section >
        <div className="flex justify-center items-center flex-col max-container">
          <h1 className='text-4xl font-palanquin  font-bold capitalize'>what our <span className='text-coral-red'>Customers</span> say? </h1>
          <p className='info-text max-w-lg mt-5 m-auto text-center mb-10'>Loremamedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, temporibus?</p>
        </div>
        <div className="flex justify-evenly w-full mt-24 flex-1 items-center max-lg:flex-col gap-14 xl:max-container mt-14">
          {reviews.map((data)=>(
            <CustomerReviewCard {...data}/>
          ))}
        </div>
    </section>
  )
}

export default CustomerReview
