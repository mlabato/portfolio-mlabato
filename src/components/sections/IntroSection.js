const IntroSection = () => {
  return (
    <section className="pt-[15rem] mx-[10rem]  animate-opacityChangeY flex flex-row items-center">
      <article className="leading-tight">
        <p className=" text-[1.5rem] mr-[2rem]  ">
          Hi I'm
        </p>

        <p className="  font-extrabold text-[4.5rem]  text-[#84A98C]">
          Martin Labato
        </p>

        <p className="  text-[1.2rem] leading-normal ">
          I’m a web developer focused on developing stylish and accesible
          digital experiences. Currently, I’m strengthening my front end skills,
          but I can perform as a full stack developer.
        </p>
      </article>

      <article><img src="/images/intro_img.svg" alt="" className="w-[90rem]"/></article>
    </section>
  );
};

export default IntroSection;
