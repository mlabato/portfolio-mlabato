import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactIcons = () => {
    return(
        <article className="fixed text-[2.25rem] right-10 bottom-10 text-[#354F52] ">
          <a href="https://github.com/mlabato" alt="" className="hover:text-[#84A98C] hover:text-[2.8rem] ease-in-out duration-500 absolute bottom-10 right-4"><FaGithub className="my-[1rem]"/></a>  
          <a href="https://www.linkedin.com/in/luismartinlab/" alt="" className="hover:text-[#84A98C] hover:text-[2.8rem] ease-in-out duration-500 absolute bottom-2 right-4"><FaLinkedin /></a> 
        </article>
    )
}

export default ContactIcons;
