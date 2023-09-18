import React, { useState } from "react";

import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
function Hero() {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-contianer border-2 border-red-500 p-2 "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat">Our summer collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            them new Arruval
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover Stylesh nike arrivals quality comfort and innovation for
          active life
        </p>
        <Button lable={"Show Now"} iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative  flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero ">
        <img
          src={bigShoeImg}
          alt="bigshow 1"
          width={610}
          height={500}
          className="object-contaien relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] sm:px-6">
          {shoes.map((shoe, index) => (
            <div className="" key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe)
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
