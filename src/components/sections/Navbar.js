import Button from "../ux/Button";

const Navbar = () => {
  const titles = ["about", "works", "contact"];
  const titlesIteration = titles.map((title) => {
    return (
      <a
        href="google.com"
        className="mx-[1rem] text-[#52796F] font-semibold hover:text-[#354F52] hover:font-bold ease-in-out duration-500"
      >
        {" "}
        {title}
      </a>
    );
  });

  return (
    <section className="mx-[10rem] h-[5rem] flex items-center justify-end fixed top-0 left-0 right-0">
      {titlesIteration}
      <Button text={"resume"} />
    </section>
  );
};

export default Navbar;
