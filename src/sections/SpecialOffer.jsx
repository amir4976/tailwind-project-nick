import React from "react";
import Button from "../Components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
function SpecialOffer() {
  return (
    <section className="flex justify-warp items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h1 className=" font-palanquin text-4xl  font-bold capitalize lg:max-w-lg">
          
          <span className="text-coral-red "> special </span>
          <span>offer </span>
          
        </h1>
        <p className="mt-4 lg:max-w-lg  info-text">
          ensuring premium comfort and style , our maticulously crafted footwear
          is designed to elevate your unmatched quality innovation and a touch
          of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          our dedication to detail and excellence ensures yout satisfaction
        </p>
        <div className="mt-11 ">
          <Button lable={"view details"} iconUrl={arrowRight} />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
