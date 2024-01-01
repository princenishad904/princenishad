import React from "react";
import { IoMdStar } from "react-icons/io";

const TestimonialCard = () => {
  return (
    <div className="w-64 border my-5 relative mx-4 rounded-md shadow-xl pb-3">
      <div className="w-14 h-14 rounded-full border mx-auto overflow-hidden testimonial">
        <img
          src="https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc="
          alt=""
        />
      </div>
      <div className="my-8 flex justify-between">
        <h1 className="text-xl mx-2">Prince Nishad</h1>
        <h3 className="px-2 bg-purple-600 text-white flex items-center rounded-l-lg">
          4.5 <IoMdStar />
        </h3>
      </div>
      <div className="text-center px-1">
        <p>
          Who could look on these monuments without reflecting on the vanity of
          mortals in thus offering up testimonials.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
