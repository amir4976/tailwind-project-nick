import React from 'react'

function ShoeCard({imgUrl,changeBigShoeImage,bigShoeImg}) {
  const handleClick =( ) =>{
    if(bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe)
    }

  }
  console.log(bigShoeImg , imgUrl )
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe ?'border-coral-red': 'border-transparent'}`} onClick={handleClick}>
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="" className='object-contain'/>
      </div>
    </div>
  )
}

export default ShoeCard
