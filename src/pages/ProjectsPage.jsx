import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "ECommerce Web App",
    description:
      "Full end to end project including Frontend using ReactJs and Backend using NodeJs(ExpressJs), MongoDB(Mongoose).",
    image: "/hero.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description:
      "Dynamic UI for a aesthetic restaurant website, fully responsive for all devices using React.js",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 3,
    title: "Pet Grooming Website",
    description:
      "Dynamic UI for a aesthetic pet grooming website, fully responsive for all devices using React.js",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 4,
    title: "Stock Manangement App",
    description:
      "Full end to end project using NextJs and MongoDB(Mongoose) for database.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 5,
    title: "AI-Saas Tool",
    description:
      "This AI Saas Tool provides 5 different day to day AI Services using Chatgpt API's to make your daily life easy.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 6,
    title: "Promptify Prompt Sharing Library",
    description:
      "You can share your awesome AI prompts here, it will help the community to learn and you can get recognition for the great work you are doing.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 7,
    title: "Netflix clone (Watchofy)",
    description:
      "Used NextJs App Based Router for frontend and API routes. Very similar to real Netflix.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 8,
    title: "Spotify Clone",
    description:
      "This website gives a little bit feel of spotify where we have some set of songs which you can play and have fun. Some of the functionalities include pausing and starting from any point, and it will automatically run next song when one ends, if no interruption in between",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 9,
    title: "Tic Tac Toe Game",
    description:
      "This is very famous game which consists of 3*3 grid and players are allowed to play alternatively with 'X' or '0'. They will be able to see animations on game end or draw.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl:
      "https://github.com/aswanthnarayan",
  },
  {
    id: 10,
    title: "TextUtils Web App",
    description:
      "This app helps to change the collection of text to some different form. It can be converting letters to uppercase, or lowercase or capitalized format. This will also tell you the number of words entered and the average time to read that text",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 11,
    title: "Flipkart Clone (Frontend)",
    description:
      "This app looks like Flipkart on look and feel, where we have some set of images of different category of products like electronic gadgets, sports equipments and vacation trips.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl:
      "https://github.com/aswanthnarayan",
  },
  {
    id: 12,
    title: "Todo App",
    description:
      " Seamless Drag and Drop option between active and completed tasks",
    image: "/mountains.png",
    gitUrl:
      "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
  {
    id: 13,
    title: "Uber App Clone",
    description:
      "This uses React Native 📱 powered by Expo Router & Google Maps API for directions, search autocomplete, places, and distance calculations.",
    image: "/mountains.png",
    gitUrl: "https://github.com/aswanthnarayan",
    previewUrl: "https://github.com/aswanthnarayan",
  },
];


const ProjectsPage = () => {

  const projectsPerPage = 6; // Number of projects to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section id="projects" className="p-5 min-h-screen">
      <h2 className="text-center text-4xl font-bold m-y-4 md:m-y-12">
        My Personal Projects
      </h2>

      <ul className="p-3 flex flex-col gap-3 md:grid md:grid-cols-3 md:p-6 md:gap-6">
        {currentProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              delay={index*250}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center ">
        {Array.from({ length: Math.ceil(projectsData.length / projectsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-4 py-2 bg-[#FFA500] text-white rounded-full ${
              currentPage === index + 1 ? "bg-blue-500" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
