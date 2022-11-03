import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactIcons = () => {
    return(
        <article className="hidden desktop:block fixed text-[2.25rem] full:text-[3rem] right-10 bottom-10 text-[#354F52] ">
          <a href="https://github.com/mlabato" alt="" className="hover:text-[#84A98C] hover:text-[2.8rem] full:hover:text-[3.4rem] ease-in-out duration-500 absolute bottom-10 full:bottom-12 right-4"><FaGithub className="my-[1rem]"/></a>  
          <a href="https://www.linkedin.com/in/luismartinlab/" alt="" className="hover:text-[#84A98C] hover:text-[2.8rem] full:hover:text-[3.4rem] ease-in-out duration-500 absolute bottom-2 right-4"><FaLinkedin /></a> 
        </article>
    )
}

export default ContactIcons;
