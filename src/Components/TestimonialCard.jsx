import React from "react";
import { IoMdStar } from "react-icons/io";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const TestimonialCard = ({ image, name, rating, qoutes }) => {
  return (
    <div className="w-11/12 max-sm:w-full mx-auto border my-4 items-center flex justify-center gap-6 max-md:flex-col max-md:items-start p-3 rounded-md ">
      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 border border-purple-500 rounded-full overflow-hidden p-1 ">
        <img src={image} alt="" className="rounded-full" />
      </div>
      <div className="w-4/5 max-md:w-full grid place-content-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <Rating name="read-only" value={rating} readOnly />
        <p>{qoutes}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
