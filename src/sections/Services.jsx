import React from "react";
import ServiceCard from "../Components/ServiceCard";

import { services } from "../constants";
function Services() {
  return (
    <div>
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((serv) => (
          <>
          <ServiceCard key={serv.label} {...serv}/>
          </>
        ))}
      </section>
    </div>
  );
}

export default Services;
