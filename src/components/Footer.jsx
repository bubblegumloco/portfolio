import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-lg leading-20 font-thin dark:bg-black">
      <div className="flex flex-col items-center">
        <div className="flex mb-1 gap-3">
          <div className="dark:text-pink-200">
            <a href="https://github.com/bubblegumloco">
              <FaGithubSquare size={25} />
            </a>
          </div>
          <div className="dark:text-pink-200">
            <a href="www.linkedin.com/in/mohani-somwaru">
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
        <p className="dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-300 to-rose-50 dark:bg-clip-text">
          © BubbleGumLoco 2023 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
