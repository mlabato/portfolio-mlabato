import { useState, useEffect } from "react";
import Button from "../ux/Button";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const titles = ["about", "works", "contact"];
  const titlesIteration = titles.map((title, i) => {
    return (
      <a
        href={"#" + title}
        key={i}
        className="mx-[1rem] full:mx-[1.5rem] text-[#52796F] font-semibold hover:text-[#354F52] hover:font-bold ease-in-out duration-500 animate-appear notebook:text-[0.9rem] full:text-[1.5rem]"
      >
        {" "}
        {title}
      </a>
    );
  });

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [showNav, setShowNav] = useState(false)

  const mobileNavbarHandler = (e) => {
    e.preventDefault()
      setShowNav(!showNav)
  }

  return (
    <section>
    <article
      className={`hidden notebook:flex notebook:mx-[10rem] desktop:mx-[17rem] full:mx-[30rem] h-[5rem] full:h-[9rem] items-center justify-end fixed top-0 left-0 right-0 ${
        visible ? "" : "-top-20 "
      } ease-out duration-500`}
    >
      
      {titlesIteration}
      <Button text={<a href="resume.pdf"  target="_blank">resume</a>} classes={"animate-appear notebook:text-[0.9rem] full:text-[1.5rem]"} />
    </article>
    <article className=" notebook:hidden desktop:hidden  flex flex-col items-end mx-[1.75rem] py-[1rem]">
      {!showNav && <GiHamburgerMenu className="text-[2rem] text-[#52796F] rounded-xl  " onClick={mobileNavbarHandler}/>}
      {showNav && <AiOutlineClose className="text-[2rem] text-[#52796F] rounded-xl  " onClick={mobileNavbarHandler}/>}


      <div className={showNav ? "mx-auto absolute top-[4rem] right-[3rem] ease-in-out duration-300 flex flex-row" : " flex flex-row absolute top-[4rem]  right-full  ease-in-out duration-300 "}>
        {titlesIteration}
        
      </div>

    </article>
    </section>
  );
};

export default Navbar;
