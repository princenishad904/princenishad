import React from "react";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="p-3 my-4">
      <h1 className="text-3xl text-center text-purple-600 font-semibold">
        Testimonial
      </h1>
      <h2 className="text-xl text-center">What our client say about us ?</h2>
      <div className="w-4/5 max-md:w-11/12 mx-auto flex justify-center items-center gap-3 flex-wrap my-8">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
