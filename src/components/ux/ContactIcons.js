import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactIcons = () => {
    return(
        <article className="absolute text-4xl right-10 bottom-10 text-[#354F52] ">
          <a href="https://github.com/mlabato" alt="" className="hover:text-[#84A98C]"><FaGithub className="my-[1rem]"/></a>  
          <a href="https://www.linkedin.com/in/luismartinlab/" alt="" className="hover:text-[#84A98C]"><FaLinkedin /></a> 
        </article>
    )
}

export default ContactIcons;
