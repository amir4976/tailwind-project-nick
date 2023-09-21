import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
function SuperQuality() {
  return (
    <section id={'about-us'} className='flex justfy-between items-center max-lg:flex-col gap-10 w-full max-container'>

        <div className="flex flex-1 flex-col">

  
        <h1 className=" font-palanquin text-4xl  font-bold capitalize lg:max-w-lg">
          We provide you 
          <span className="text-coral-red "> super </span>
          <span className="text-coral-red ">quality </span>
          Shoes
        </h1>
        <p className="mt-4 lg:max-w-lg  info-text">
              ensuring premium comfort and style , our maticulously crafted footwear is designed to elevate your unmatched quality innovation and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          our dedication to detail and excellence ensures yout satisfaction
        </p>
        <div className="mt-11 ">
        <Button lable={"view details"} iconUrl={arrowRight} />
        </div>
          </div>
        
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe 8" width={570} height={520}  className='object-containe'/>
        </div>
    </section>
  )
}

export default SuperQuality
