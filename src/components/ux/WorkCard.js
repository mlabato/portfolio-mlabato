import { FaLink } from "react-icons/fa";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

let count = 0;

const WorkCard = (props) => {
  const workList = [
    {
      name: "freelance project",
      description: "responsive landing page",
      tech: [
        <FaReact title="React.js" />,
        <SiTailwindcss title="Tailwind.css" />,
      ],
      website: "http://www.avanzalibertadlujan.com.ar/",
      image: "landing-la.jpg",
    },
    {
      name: "twitter app",
      description:
        "web app for visualizing personalized Twitter data. View your top retweeted and liked tweeted and detailed user information.",
      tech: [
        <FaReact title="React.js" />,
        <SiTailwindcss title="Tailwind.css" />,

        <FaNodeJs title="NodeJS" />,
      ],
      website: "https://mlabato-twitterapp.vercel.app/",
      image: "twitter-app.jpg",
    },

    {
      name: "freelance project",
      description: "responsive landing page",
      tech: [
        <FaReact title="React.js" />,
        <SiTailwindcss title="Tailwind.css" />,
      ],
      website: "http://www.mileilujan2023.com.ar/",
      image: "landing-lla.jpg",
    },
    {
      name: "outlet de mates",
      description:
        "e-commerce which includes product browser, cart and e-payment methods. It also offers an admin dashboard with auth to manage stock and products. ",
      tech: [
        <FaReact title="React.js" />,
        <SiTailwindcss title="Tailwind.css" />,
        <SiMysql title="MySQL" />,
        <FaNodeJs title="NodeJS" />,
      ],
      website: "http://twitter-app-react.vercel.app/",
      image: "odm-app.jpg",
    },
    {
      name: "mr studio",
      description:
        "responsive landing page with contact form linked to Firebase database.",
      tech: [
        <FaReact title="React.js" />,
        <SiTailwindcss title="Tailwind.css" />,
        <SiFirebase title="Firebase" />,
      ],
      image: "landing-mr.jpg",
      website: "http://mr-studio.vercel.app/",
    },
  ];

  // //ARMADO DE HOOK
  const [currentIndex, setCurrentIndex] = useState(0);

  //FUNCIONAMIENTO BOTONES
  const handleOnNextClick = () => {
    count = (count + 1) % workList.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const imagesLength = workList.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
  };

  const iteratedIcons = workList[currentIndex].tech.map((icon, i) => {
    return (
      <div className=" mr-[.7rem] desktop:mr-[1.3rem] notebook:text-[1.2rem] desktop:text-[1.7rem] full:text-[2rem]" key={i}>
        {icon}
      </div>
    );
  });

  return (
    <div className="w-full group  select-none relative  my-[1rem]   ">
      
        <img
          src={"/images/" + workList[currentIndex].image}
          className=" mx-auto w-full rounded-xl overflow-hidden   opacity-90  "
          alt=""
        />

        <div className="absolute bottom-[1rem] notebook:bottom-[1.5rem] desktop:bottom-[2rem] mx-[.7rem] notebook:mx-[2rem] desktop:mx-[3rem] z-40 w-[90%] ">
          <p className="text-[1rem] notebook:text-[1.75rem] desktop:text-[2.3rem] full:text-[3rem] font-bold text-[#84A98C] ">
            {workList[currentIndex].name}
          </p>
          <p className="text-[.7rem] notebook:text-[1rem] desktop:text-[1.3rem] full:text-[1.75rem]  font-medium   pb-[.5rem] desktop:pb-[1rem] text-white">
            {workList[currentIndex].description}
          </p>
          <div className="flex flex-row items-center pb-[.5rem] notebook:pb-[.75rem] desktop:pb-[1rem] text-[#84A98C]">
            {iteratedIcons}
          </div>
          
          <a href={workList[currentIndex].website} alt="" className=" "><FaLink className=" notebook:text-[1.5rem] desktop:text-[2rem] full:text-[2.5rem] mx-auto text-white hover:text-[#84A98C]" /></a>
        </div>
      

      <div className="absolute -inset-[3rem] desktop:-inset-[4rem] flex p-4 justify-between items-center z-0">
        <button onClick={handleOnPrevClick} className="text-black  ">
          <AiOutlineLeft  className="text-[#354F52] text-[2rem] " />
        </button>
        <button onClick={handleOnNextClick} className="text-[#354F52] text-[2rem]">
          <AiOutlineRight  className="" />
        </button>
      </div>

    </div>
  );
};

export default WorkCard;
