import Title from "../ux/Title";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const icons = [
  <SiJavascript title="JavaScript ES6+" />,
  <FaReact title="React.js" />,
  <SiTailwindcss title="Tailwind.css" />,
  <SiMysql title="MySQL" />,
  <FaNodeJs title="NodeJS" />,
  <SiFirebase title="Firebase" />,
];
const iteratedIcons = icons.map((icon, i) => {
  return (
    <div className="mr-[0.8rem] hover:text-[#84A98C]" key={i}>
      {icon}
    </div>
  );
});

const AboutSection = () => {
  return (
    <article id="about" className="mx-[2rem] notebook:mx-[15rem] desktop:mx-[20rem] full:mx-[25rem] relative top-[20rem] notebook:top-[30rem] desktop:top-[40rem] full:top-[60rem] animate-opacityChangeX">
      <Title text={"about me"} />
      <div className="flex notebook:flex-row my-[0.5rem] desktop:my-[1rem]">
        <p className=" text-[0.8rem] notebook:w-2/3 desktop:text-[1rem] full:text-[1.6rem] ">
          I’m not the typical web developer, because I’m 32 and since 2011 I
          have been working as legal counsellor, after obtaining both law and
          LLM degrees. However, in 2021 I pursued a wish I had for a long time:
          learn to code. I started a full stack developer bootcamp at Digital
          House and I discovered that I really liked it. That led on starting to
          think in a big change in my career. 
        </p>

        <div
          className="absolute border-2 border-[#354F52] mx-[4rem] rounded-xl my-auto
          top-[21.5rem] right-[1.2rem] notebook:top-[1rem] notebook:bottom-0  notebook:my-auto notebook:-right-[9.5rem] desktop:-right-[6.5rem]    full:w-[17rem] full:h-[17rem]
          w-[10rem] h-[10rem] notebook:w-[12rem] notebook:h-[12rem] desktop:w-[13rem] desktop:h-[13rem] 
              desktop:hover:-right-[6.5rem] desktop:hover:top-[0.7rem] ease-in-out duration-300 "
        />

        <div className="absolute  bg-profile-picture bg-cover  rounded-xl
        w-[10rem] h-[10rem] notebook:w-[12rem] notebook:h-[12rem] desktop:w-[13rem] desktop:h-[13rem] full:w-[17rem] full:h-[17rem]
        top-[21rem] right-[6rem] notebook:top-0 notebook:bottom-0 notebook:my-auto notebook:-right-[5rem] desktop:-right-[2rem]   " />
      </div>

      <p className="text-[0.8rem] notebook:w-3/5 desktop:text-[1rem] full:text-[1.6rem]  ">
        Here are a few technologies I’ve been working with recently:
      </p>
      <div className="flex flex-row text-[1.2rem]  desktop:text-[2rem] full:text-[3rem]   my-[1rem] text-[#354F52]">
        {iteratedIcons}
      </div>
    </article>
  );
};

export default AboutSection;
