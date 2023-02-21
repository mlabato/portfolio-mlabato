const IntroSection = () => {
  return (
    <section className=" pt-[4rem] desktop:pt-[15rem] pb-[2.5rem] desktop:pb-[5rem] mx-[2rem] desktop:mx-[10rem]  animate-opacityChangeY flex flex-row items-center">
      <article className="leading-tight">
        <p className=" text-[.8rem] desktop:text-[1.5rem] mr-[2rem] text-[#354F52]  ">
          Hi I'm
        </p>

        <p className="  font-extrabold text-[1.5rem] desktop:text-[4.5rem]  text-[#84A98C]">
          Martin Labato
        </p>

        <p className="text-[.7rem]  desktop:text-[1.2rem] leading-normal text-[#354F52] ">
          I’m a web developer focused on developing stylish and accesible
          digital experiences. Currently, I’m strengthening my front end skills,
          but I can perform as a full stack developer.
        </p>
      </article>

      <article><img src="/images/intro_img.svg" alt="" className="w-[40rem] desktop:w-[90rem]"/></article>
    </section>
  );
};

export default IntroSection;
