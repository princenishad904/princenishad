import React from "react";
import studyImage from "../assets/study.webp";

const Education = () => {
  return (
    <div
      id="education"
      className="w-4/5 max-lg:w-full mx-auto items-center flex max-md:flex-col-reverse gap-4 p-2 my-6 "
    >
      <div className="w-4/5 max-md:w-full p-3">
        <h2 className="text-3xl py-3">Education</h2>
        <div className="my-2">
          <h1 className="text-2xl max-sm:text-xl text-gray-500">
            Uttranchal University, Uttrakhand
          </h1>
          <h1 className="text-md text-gray-500">
            BCA Bachelor of computer application . July 2023 - July 2026
          </h1>{" "}
          <h3>CGPA - 8.3 %</h3>
        </div>
        <hr />
        <div className="my-2">
          <h1 className="text-2xl max-sm:text-xl text-gray-500">
            Ramkrita intermediate Collage . Uttar Pradesh ( Kushinagar ){" "}
          </h1>
          <span>July 2021 - July 2023</span>
          <h3>
            12 <sup>th</sup> Passed
          </h3>
          <h2>76.3 % Marks</h2>
        </div>
      </div>

      <div className="w-96  max-md:w-56 max-sm:w-56 ">
        <img src={studyImage} alt="study pic" />
      </div>
    </div>
  );
};

export default Education;
