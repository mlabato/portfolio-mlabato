import { FaGithub, FaRegEye } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

let count = 0;

const WorkCard = (props) => {
  const workList = [
    {
      name: "twitter app",
      description:
        "A web app for visualizing personalized Twitter data. View your top retweeted and liked tweeted and detailed user information.",
      tech: "Express + React + Twitter API",
      website: "https://twitter-app-react.vercel.app/",
      github: "https://github.com/mlabato/twitterapp-react",
      image: "twitter-app.jpg",
    },
    {
      name: "outlet de mates",
      description:
        "An e-commerce, which includes product browser, cart and e-payment methods. It also offers an admin dashboard with auth to manage stock and products. ",
      tech: "Express + React + MySQL + MP",
      image: "odm-app.jpg",
    },
    {
      name: "mr studio",
      description:
        "Responsive landing page with contact form linked to Firebase database.",
      tech: "React + Tailwind + Firebase",
      image: "landing-mr.jpg",
      github: "https://github.com/mlabato/mr-studio",
      website: "https://mr-studio.vercel.app/",
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

  return (
    <div className="w-full group  select-none relative my-[1rem]  ">
      <div className="">
        <img
          src= {"/images/" + workList[currentIndex].image}
          className=" mx-auto w-full overflow-hidden opacity-80 "
          alt=""
        ></img>
      </div>

      <div className="absolute -inset-[4rem] flex p-4 justify-between items-center">
        <button onClick={handleOnPrevClick} className="text-black  ">
          <AiOutlineLeft size={40} className="text-[#354F52]  " />
        </button>
        <button onClick={handleOnNextClick} className="text-[#354F52] ">
          <AiOutlineRight size={40} className="" />
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
