import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Next Door Project",
    category: "Newsletter",
    image: "/images/projects/nextDoor.png",

    github: "https://github.com/bubblegumloco/nextDoorProject",
    live: "https://newslettertemplate.netlify.app",
  },
  {
    id: 2,
    title: "sciNews",
    category: "Newsletter",
    image: "/images/projects/sciNews.png",

    github: "https://github.com/bubblegumloco/sciNews",
    live: "scinews.netlify.app",
  },
  {
    id: 3,
    title: "Lyft Receipt",
    category: "Transactional",
    image: "/images/projects/taxi.png",

    github: "https://github.com/bubblegumloco/taxiReceipt",
    live: "taxi-receipt.netlify.app",
  },
  {
    id: 4,
    title: "Singer Machines Receipt",
    category: "Transactional",
    image: "/images/projects/machine.png",

    github: "https://github.com/bubblegumloco/singerMachines",
    live: "singer-receipt.netlify.app",
  },
  {
    id: 5,
    title: "Our Place",
    category: "Promotional",
    image: "/images/projects/ourPlacePromo.png",
    github: "https://github.com/bubblegumloco/ourPlace",
    live: "promo-template.netlify.app",
  },
  {
    id: 6,
    title: "Instacart",
    category: "Promotional",
    image: "/images/projects/instacart.png",
    github: "https://github.com/bubblegumloco/instacart",
    live: "https://promotemplate.netlify.app",
  },
];

const ProjectSection = () => {
  const [categories, setCategories] = useState(projectData);

  const filterCategories = (category) => {
    setCategories(
      projectData.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="py-10 md:px-10 px-5  dark:bg-black" id="projects">
      <h2 className="flex justify-center items-center text-7xl leading-20 font-thin mb-5 md:mb-10 dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
        Projects
      </h2>
      <div className="flex justify-center items-center mb-6">
        <div className="m-0 text-lg leading-20 font-thin">
          <button
            onClick={() => setCategories(projectData)}
            className="filterList dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text"
            value="All"
          >
            All
          </button>
          <button
            onClick={() => filterCategories("Newsletter")}
            className="filterList dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text"
            value="Newsletter"
          >
            Newsletter
          </button>
          <button
            onClick={() => filterCategories("Transactional")}
            className="filterList dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text"
            value="Transactional"
          >
            Transactional
          </button>
          <button
            onClick={() => filterCategories("Promotional")}
            className="filterList dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text"
            value="Promotional"
          >
            Promotional
          </button>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1 lg:grid-cols-3">
          {categories.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              img={project.image}
              live={project.live}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
