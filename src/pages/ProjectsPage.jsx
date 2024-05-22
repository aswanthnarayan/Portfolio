import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Blog App",
    description: "A comprehensive full-stack blog application built using React.js for the frontend and Node.js (Express) for the backend, with MongoDB (Mongoose) as the database. This project demonstrates CRUD operations, user authentication, and responsive design, making it a robust solution for managing and publishing blog posts.",
    image: "/projects/blog.png",
    gitUrl: "https://github.com/aswanthnarayan/react-blog-app",
    previewUrl: "https://react-blog-app-aswanth.netlify.app",
  },
  {
    id: 2,
    title: "React Weather App",
    description: "A visually appealing and fully responsive weather application built with React.js. It fetches weather data from an external API and displays current weather conditions along with a 5-day forecast, providing users with an intuitive interface to stay updated on the latest weather information.",
    image: "/projects/react-weather-app.png",
    gitUrl: "https://github.com/aswanthnarayan/react-weather-app",
    previewUrl: "https://weather-app-react-aswanth.netlify.app",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "A dynamic and aesthetically pleasing personal portfolio website created using React.js. This project showcases personal projects, skills, and contact information, featuring a modern design that is fully responsive across all devices. It aims to highlight professional achievements and experiences in a visually compelling manner.",
    image: "/projects/portfolio.png",
    gitUrl: "https://github.com/aswanthnarayan/Portfolio",
    previewUrl: "https://aswanthck.netlify.app/",
  },
  {
    id: 4,
    title: "Movie Search App",
    description: "A movie search application developed with pure HTML, CSS, and JavaScript. It allows users to search for movies, view details, and access ratings. This project provides an intuitive and interactive user experience with a simple yet effective user interface for movie enthusiasts.",
    image: "/projects/movie-search-app.png",
    gitUrl: "https://github.com/aswanthnarayan/Movie-App-JS",
    previewUrl: "https://movie-search-app-asw.netlify.app",
  },
  {
    id: 5,
    title: "Online Code Editor",
    description: "An online code editor tool that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time. Built with React.js, this project aims to facilitate web development and testing by providing a seamless and interactive coding environment.",
    image: "/projects/code-editor.png",
    gitUrl: "https://github.com/aswanthnarayan/Online-Code-Editor-using-React---React-Project---jjks3mxt1pdg",
    previewUrl: "https://online-code-editor-using-react-react-project-jjks3mx-rcvwuhbtw.vercel.app/",
  },
  {
    id: 6,
    title: "Word Guess Game",
    description: "A word guessing game inspired by Wordle, where users attempt to guess a hidden word within a limited number of attempts. Built using JavaScript, this project offers a fun and challenging experience, featuring a clean interface and responsive design.",
    image: "/projects/word-guess-game.png",
    gitUrl: "https://github.com/aswanthnarayan/Word-Guessing-Game",
    previewUrl: "https://word-guess-game-aswanth.netlify.app/",
  },
  {
    id: 7,
    title: "Tip Calculator",
    description: "A simple and intuitive web application that helps users calculate the tip amount based on the total bill and desired tip percentage. This project is designed to enhance user experience with a clean UI and responsive design, making it easy to use on both desktop and mobile devices.",
    image: "/projects/tip-calculator.png",
    gitUrl: "https://github.com/aswanthnarayan/Tip-Calculator-app-FrontEndMentor",
    previewUrl: "https://tip-calculator-frontendmentor-asw.netlify.app/",
  },
  {
    id: 8,
    title: "Weather App Using Vanilla JS",
    description: "A dynamic and responsive weather application built using pure JavaScript (Vanilla JS). It fetches and displays weather data from an external API, providing users with current weather conditions and forecasts. The project emphasizes simplicity and accessibility across all devices.",
    image: "/projects/js-weather-app.png",
    gitUrl: "https://github.com/aswanthnarayan/Weather-App",
    previewUrl: "https://weatherapp-asw.netlify.app/",
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
