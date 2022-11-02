import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <article className="flex flex-row mb-[10rem] mt-[1rem] notebook:mt-[2rem] relative">
      <div className=" notebook:w-[45%] mb-[2rem] notebook:mb-[3rem] desktop:mb-[7rem] notebook:text-justify ">
        <div className="text-[#84A98C] text-[1.2rem]  notebook:text-[1.4rem] font-semibold ml-[0.75rem] notebook:ml-0">
          {props.name}
        </div>

        <div className=" absolute notebook:w-[20rem] desktop:w-[22rem] notebook:z-40 text-[0.8rem] z-40">
          <p className="notebook:bg-[#84A98C] text-[#354F52] text-justify font-semibold notebook:font-normal notebook:text-[#CAD2C5] p-4   ">
            {props.description}
          </p>
          <p className="ml-[1rem] notebook:ml-0 notebook:mt-[1rem] text-[#CAD2C5] notebook:text-[#354F52] contrast-200 notebook:contrast-0">
            {props.tech}
          </p>

          <div className="flex flex-row my-[0.25rem] text-[#354F52] ml-[1rem] notebook:ml-0 ">
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
          "absolute   bg-cover  rounded-xl h-[11rem] w-[21rem] desktop:h-[12rem] desktop:w-[24rem]  opacity-20 notebook:opacity-100 notebook:-right-[5rem] notebook:top-[0.75rem] desktop:-right-[3rem] desktop:top-0  top-[2rem] z-20 " +
          props.image
        }
      />
      <div className="absolute hidden notebook:block border-2 border-[#354F52] mx-[4rem] 
      notebook:h-[11rem] notebook:w-[21rem]  desktop:h-[11rem]  desktop:w-[24rem] 
      notebook:-right-[10rem] notebook:top-[1.75rem]   desktop:-right-[8rem] desktop:top-[1.3rem] 
      notebook:hover:-right-[9.5rem] notebook:hover:top-[1.2rem] desktop:hover:-right-[7.7rem] desktop:hover:top-[1rem] ease-in-out duration-300 rounded-xl my-auto" />
    </article>
  );
};

export default WorkCard;
