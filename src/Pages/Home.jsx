import React from "react";
import PrinceImage from "../assets/prince.jpg";

function Home() {
  return (
    <div className="w-full" id="home">
      <div
        className="w-full max-sm:flex-col-reverse flex gap-8 justify-center items-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="w-6/12 max-sm:w-11/12 grid place-items-center max-sm:h-72 h-96">
          <div className="max-sm:text-center">
            <p className="text-xl max-sm:hidden text-gray-400 max-ms:my-1 my-4">
              First of all thanks For Visit My Portfolio
            </p>

            <div className="">
              <h3 className="text-xl text-gray-500">
                Hi <span>I'am</span>
              </h3>
              <h1 className="text-5xl max-md:text-4xl">Prince Nishad</h1>
            </div>
            <span className="text-md my-2 block">Frontend Developer</span>

            <p className="my-4">
              Hi, I'm Frontend Developer. i am made six projects using HTML5,
              CSS3 , JavaScript, Tailwind css ,React.js .
            </p>

            <div className="mt-8 flex max-sm:justify-center gap-4">
              <button className="bg-blue-500 text-white shadow-md shadow-blue-200  py-1 px-3 rounded">
                Linkedin
              </button>
              <button className="bg-purple-500 text-white shadow-md shadow-purple-300  py-1 px-3 rounded">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="w-96 max-lg:w-64 max-sm:w-44 max-sm:h-44 max-lg:h-64 border h-96 fancy_border overflow-hidden shadow-xl">
          <img src={PrinceImage} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home;
