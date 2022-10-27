import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <article className="flex flex-row mb-[10rem] mt-[1rem] relative">
      <div className="w-[45%] mb-[5rem] text-justify">
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
      <div
        className={
          "bg-cover h-[15rem] rounded-xl w-[30rem] absolute -right-[10rem] z-0 shadow-xl shadow-[#354F52] " +
          props.image
        }
      />
    </article>
  );
};

export default WorkCard;
