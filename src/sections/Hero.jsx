import React from "react";

import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
function Hero() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-contianer border-2 border-red-500 p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat">Our summer collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">them new Arruval</span>
          <br />
          <span>Nike </span>
          Shoes
        </h1>
        <p>
          Discover Stylesh nike arrivals quality comfort and innovation for
          active life
        </p>
        <Button lable={"Show Now"} iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat,index)=>(
              <div key={index}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
