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
    <article id="about" className="px-[2rem] notebook:px-[7.5rem]  desktop:px-[10rem] full:px-[15rem] py-[2.5rem] notebook:py-[3.5rem] desktop:py-[5rem] full:py-[7.5rem] animate-opacityChangeX bg-white ">
      <Title text={"about me"} />
      <div className="flex flex-col notebook:flex-row  my-[1rem] ">
        <div className="text-[.7rem] notebook:text-[1rem] desktop:text-[1.2rem] full:text-[1.5rem] notebook:w-2/3 mr-[2rem]">
          I’m not the typical web developer, because I’m 32 and since 2011 I
          have been working as legal counsellor, after obtaining both law and
          LLM degrees. However, in 2021 I pursued a wish I had for a long time:
          learn to code. I started a full stack developer bootcamp at Digital
          House and I discovered that I really liked it. That led on starting to
          think in a big change in my career.
          <br />
          <br />
          Here are a few technologies I’ve been working with recently:
          <div className="flex flex-row text-[1.2rem]  desktop:text-[2rem] full:text-[3rem]   my-[1rem] text-[#354F52]">
            {iteratedIcons}
          </div>
        </div>
        <img
          src="/images/profile-image.jpeg"
          alt=""
          className=" w-[10rem] mx-auto notebook:w-[15rem] notebook:h-[15rem]  desktop:w-[20rem] desktop:h-[20rem] full:w-[22rem] full:h-[22rem] rounded-xl z-50"
        />
        <div className="relative z-10">
          <div
            className="absolute hidden notebook:block border-2 border-[#354F52] desktop:mx-[4rem] rounded-xl my-auto
         notebook:-right-[0.5rem] desktop:-right-[5rem] full:-right-[2.5rem]  notebook:top-[0.5rem] desktop:top-[1rem]
         notebook:h-[15rem]  notebook:w-[15rem] desktop:w-[20rem]  desktop:h-[20rem] full:w-[22rem] full:h-[22rem]
         notebook:hover:-right-[0.25rem] notebook:hover:top-[0.25rem] desktop:hover:-right-[4.75rem] desktop:hover:top-[.75rem] full:hover:full:-right-[2rem] ease-in-out duration-300 "
          />
        </div>
      </div>
    </article>
  );
};

export default AboutSection;
