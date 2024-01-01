import React from "react";
import aboutImage from "../assets/aboutImage.webp";

const About = () => {
  return (
    <div>
      <div
        className="flex w-full border py-12 items-center bg-purple-100 justify-center max-md:flex-col  gap-12 max-sm:gap-1"
        id="about"
      >
        <div className="w-72 h-72 max-sm:w-48 max-sm:h-48 grid place-items-center">
          <img src={aboutImage} alt="image" />
        </div>
        <div className="w-6/12 max-md:w-full px-2">
          <h1 className="text-3xl my-4 max-sm:text-center text-purple-600">
            About Me
          </h1>
          <p>
            Hello, My name is Prince Nishad Currently I am doing Bachelor of
            Computer Applications ( BCA ) from Uttranchal University Uttrakhand.
            My skills includes a decent foundation in javascript, and React.js
            from development perpective, i have done many project in
            HTML,CSS,JavaScript and React.js So, I am well Good in JavaScript
            Ecosystem. For computer science fundamentals, I have made 6 projects
            using these technology. I have a decent knowledge about. I have also
            practiced coding by solving over 80+ problems on various coding
            platforms like Leetcode, GFG and Hackerrank
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
