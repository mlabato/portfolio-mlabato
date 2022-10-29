import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <article className="flex flex-row mb-[10rem] mt-[2rem] relative">
      <div className="w-[45%] mb-[6rem] text-justify">
        <div className="text-[#84A98C] text-[22px] font-semibold">
          {props.name}
        </div>

        <div className=" absolute w-[25rem] z-40  ">
          <p className="bg-[#84A98C] text-[#CAD2C5] p-4 ">
            {props.description}
          </p>
          <p className="mt-[1rem] text-semibold text-[#354F52]">{props.tech}</p>
          <div className="flex flex-row my-[0.25rem] text-[#354F52]">
            <a href={props.website} className="mr-[0.5rem] text-xl">
              <FaRegEye />
            </a>{" "}
            <a href={props.github} className="mr-[1rem] text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#354F52] mx-[4rem] -right-[15rem] top-[1.2rem] w-[30rem] h-[15rem] hover:-right-[14.8rem] hover:top-[1rem] ease-in-out duration-300 rounded-xl my-auto" />
      <div
        className={
          "bg-cover h-[15rem] rounded-xl w-[30rem] absolute -right-[10rem] z-0 " +
          props.image
        }
      />
    </article>
  );
};

export default WorkCard;
