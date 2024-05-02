

import React, { useTransition, useState } from "react";
import TabButton from "../components/TabButton";


const skillsList = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Javascript",
  "HTML",
  "CSS",
  "Github",
  "MySQL",
];

const certificateList = [
  {
    url: "https://test",
    name: "Javascript-Advanced",
  },
  {
    url: "https://test1",
    name: "React-Certified",
  },
  {
    url: "https://test2",
    name: "HTML/CSS Certified",
  },
  {
    url: "https://test3",
    name: "React Native Certified",
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        {skillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <li>Government PolyTechnic College Kannur</li>
        <li>Chovva HSS Kannur</li>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <>
        {certificateList.map((certificate) => (
          <a key={certificate.url} href={certificate.url} target="_blank">
            <li className="hover:scale-y-110 hover:text-secondary-300">
              {certificate.name}
            </li>
          </a>
        ))}
      </>
    ),
  },
];

const AboutPage = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section  id="about" className="min-h-screen">
      <div className="flex flex-col py-4 md:flex-row ">
       <div className="flex items-center justify-center md:w-1/2">
       <img
       data-aos="fade-down-right"
       data-aos-delay = "300"
          src="/about.png"
          className="w-3/4"

          alt="about_image"
        />
       </div>
        <div 
        
        className="p-3 flex flex-col md:w-1/2 md:justify-center md:p-5 gap-y-2 md:gap-y-3">
          <h2 
          data-aos ="fade-left"
          data-aos-delay = "300"
          data-aos-duration = "700"
          className="text-[#FFA500] text-3xl font-bold lg:text-4xl">About Me</h2>
          <p
           data-aos ="fade-left"
           data-aos-delay = "600"
           data-aos-duration = "700"
           className="text-base lg:text-xl">
            I am a Self-taught web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Next.js,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div
          data-aos ="fade-left"
          data-aos-delay = "900"
          data-aos-duration = "700"
          className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
             
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
            
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
            
              Certifications
            </TabButton>
          </div>
          <div className="">
            <ul
            data-aos ="fade-left"
            data-aos-delay = "900"
            data-aos-duration = "700"
            className="w-full px-5 gap-5 text-base ">
                <li className="list-disc  flex gap-x-6 gap-y-3 flex-wrap " >
                {TAB_DATA.find((t) => t.id === tab).content}
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;