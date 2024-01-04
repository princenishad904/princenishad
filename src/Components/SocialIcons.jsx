import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="w-full text-center  absolute  bottom-0">
      <ul>
        <a href="https://github.com/princenishad904" target="_blank">
          <li className="inline-block text-2xl mx-2">
            <FaGithub />
          </li>
        </a>
        <a href="https://linkedin.com/in/prince-nishad" target="_blank">
          <li className="inline-block text-2xl mx-2">
            <FaLinkedinIn />
          </li>
        </a>
        <a href="https://leetcode.com/princenishad/" target="_blank">
          <li className="inline-block text-2xl mx-2">
            <SiLeetcode />
          </li>
        </a>
        <a
          href="https://www.instagram.com/justbcawala?igsh=MXV0ZDQxdnhqb2NmMA=="
          target="_blank"
        >
          <li className="inline-block text-2xl mx-2">
            <FaInstagram />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialIcons;
