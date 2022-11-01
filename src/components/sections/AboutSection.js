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
  return <div className="mr-[0.8rem] hover:text-[#84A98C]" key={i}>{icon}</div>;
});

const AboutSection = () => {


  return (
    <article
      className="mx-[1.75rem] desktop:mx-[20rem] relative top-[20rem] desktop:top-[30rem] animate-opacityChangeX">
      <Title text={"about me"} />
      <div className="flex desktop:flex-row my-[0.5rem] desktop:my-[1rem]">
        <p className=" text-[0.8rem] desktop:w-2/3 desktop:text-[1rem] text-justify">
          I’m not the typical web developer, because I’m 32 and since 2011 I
          have been working as legal counsellor, after obtaining both law and
          LLM degrees. However, in 2021 I pursued a wish I had for a long time:
          learn to code. I started a full stack developer bootcamp at Digital
          House and I discovered that I really liked it. That led on starting to
          think in a big change in my career. Here are a few technologies I’ve
          been working with recently:
        </p>

        <div className="absolute border-2 border-[#354F52] mx-[4rem] desktop:-right-[7rem] desktop:top-[6.5rem] w-[10rem] h-[10rem] top-[21.5rem] -right-[0.1rem] desktop:w-[13rem] desktop:h-[13rem] desktop:hover:-right-[6.8rem] desktop:hover:top-[6.2rem] ease-in-out duration-300 rounded-xl my-auto" />

        <div className="absolute bg-profile-picture bg-cover w-[10rem] h-[10rem] desktop:w-[13rem] desktop:h-[13rem] top-[21rem] right-[4.5rem]     desktop:-right-[2rem] desktop:top-[5.3rem] rounded-xl " />
      </div>

      <p className="text-[0.8rem] desktop:w-3/5 desktop:text-[1rem]  text-justify">
        Here are a few technologies I’ve been working with recently:
      </p>
      <div className="flex flex-row text-[1.2rem]  desktop:text-[2rem]   my-[1rem] text-[#354F52]">
        {iteratedIcons}
      </div>
    </article>
  );
};

export default AboutSection;
