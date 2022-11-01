import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <article className="flex flex-row mb-[10rem] mt-[1rem] desktop:mt-[2rem] relative">
      <div className=" desktop:w-[45%] mb-[2rem] desktop:mb-[6rem] desktop:text-justify ">
        <div className="text-[#84A98C] text-[1.2rem]  desktop:text-[1.4rem] font-semibold ml-[0.75rem] desktop:ml-0">
          {props.name}
        </div>

        <div className=" absolute desktop:w-[25rem] desktop:z-40 text-[0.8rem] z-40">
          <p className="desktop:bg-[#84A98C] text-[#354F52] text-justify font-semibold desktop:font-normal desktop:text-[#CAD2C5] p-4 contrast-150 desktop:contrast-0">
            {props.description}
          </p>
          <p className="ml-[1rem] desktop:ml-0 desktop:mt-[1rem] text-[#CAD2C5] desktop:text-[#354F52] contrast-200 desktop:contrast-0">
            {props.tech}
          </p>

          <div className="flex flex-row my-[0.25rem] text-[#354F52] ml-[1rem] desktop:ml-0 ">
            <a href={props.website} className="mr-[0.5rem] text-xl">
              <FaRegEye />
            </a>{" "}
            <a href={props.github} className="mr-[1rem] text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div
        className={
          "absolute   bg-cover  rounded-xl h-[11rem] w-[22rem] desktop:h-[15rem] desktop:w-[30rem] opacity-20 desktop:opacity-100 desktop:-right-[10rem] top-[2rem] desktop:top-0 z-20 " +
          props.image
        }
      />
      <div className="absolute hidden desktop:block border-2 border-[#354F52] mx-[4rem]  -right-[15rem] top-[1.2rem]  h-[15rem]  w-[30rem] :hover:-right-[14.8rem] hover:top-[1rem] ease-in-out duration-300 rounded-xl my-auto" />
    </article>
  );
};

export default WorkCard;
