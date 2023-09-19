import React from "react";
import {products} from '../constants'
import PopularProductCard from "../Components/PopularProductCard";
function PopularProduct() {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">our<span className='text-coral-red'>Popular</span> Producet</h2>
        <p className="lg:mac-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after <br /> selections 
          Discover and world of comfort design and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProduct;
