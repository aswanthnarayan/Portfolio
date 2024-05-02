import React from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl,delay }) => {

  // const delay = 100 * index;
  return (
    <div data-aos="fade-down" data-aos-delay={delay} data-aos-duration = "700" className="">
      <div

        className="h-52 md:h-62 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          objectFit:"cover"
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm hidden group-hover:flex transition-all duration-500">
          <a href={gitUrl} target="_blank" className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#babec0] hover:border-white group/a">
            <img src="/github.png" className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/a:text-white" />
          </a>
          <a href={previewUrl} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/a">
            <img src="/dribbble.png" className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/a:text-white" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3  py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
