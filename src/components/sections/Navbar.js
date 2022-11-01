import { useState, useEffect } from "react";
import Button from "../ux/Button";

const Navbar = () => {
  const titles = ["about", "works", "contact"];
  const titlesIteration = titles.map((title, i) => {
    return (
      <a
        href="google.com"
        key={i}
        className="mx-[1rem] text-[#52796F] font-semibold hover:text-[#354F52] hover:font-bold ease-in-out duration-500 animate-appear"
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

  return (
    <section
      className={`mx-[10rem] h-[5rem] flex items-center justify-end fixed top-0 left-0 right-0 ${
        visible ? "" : "-top-20 "
      } ease-out duration-500`}
    >
      {titlesIteration}
      <Button text={<a href="resume.pdf"  target="_blank">Resume</a>} classes={"animate-appear"} />
    </section>
  );
};

export default Navbar;
