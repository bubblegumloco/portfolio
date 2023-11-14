import React from "react";
import AddressBar from "./addressBar";
import { PiCodeLight } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ img, title, category, live, github }) => {
  return (
    <div className=" dark:bg-black">
      <AddressBar />
      <div>
        <div
          className="relative flex items-center justify-center h-full
     group hover:bg-orange-100 border-gray-300 p-3 bg-gray-100 dark:hover:bg-purple-200"
        >
          <img src={img} alt={title} className="group-hover:opacity-20" />
          <div
            className="hidden group-hover:block absolute top-[50%] left-[50%] 
        translate-x-[-50%] translate-y-[-50%] bg-transparent "
          >
            <h3 className=" text-black tracking-wider text-center bg-transparent text-4xl font-bold font-projectTitle">
              {title}
            </h3>
            <p className="pb-4 pt-2 text-black text-center bg-transparent text-2xl font-thin">
              {category}
            </p>
            <div className="flex justify-center items-center gap-5 bg-transparent text-black">
              <button className="btn btn-circle btn-outline">
                <a href={live} target="_blank">
                  <BsArrowUpRight size={20} />
                </a>
              </button>
              <button className="btn btn-circle btn-outline">
                <a href={github} target="_blank">
                  <PiCodeLight size={20} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
