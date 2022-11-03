const IntroSection = () => {
  return (
    <article className=" mx-[2rem] notebook:mx-[15rem] desktop:mx-[22rem] full:mx-[30rem] relative top-[8rem] notebook:top-[10rem] desktop:top-[12rem] full:top-[20rem] mb-[5rem] animate-opacityChangeY">

      <div className=" notebook:text-[1.25rem] desktop:text-[1.5rem] full:text-[2rem] ml-[0.15rem]  ">Hi I'm</div>

      <div className="absolute  top-[0.4rem]  desktop:top-[0.75rem]  font-extrabold text-[2.8rem] notebook:text-[4.62rem] desktop:text-[4.5rem] full:text-[8.2rem]  text-[#84A98C]">
        Martin Labato
      </div>

      <div className="absolute  top-[3rem]  notebook:top-[4.5rem] desktop:top-[5.5rem] full:top-[8rem] font-extrabold text-[2.05rem] notebook:text-[3.4rem] desktop:text-[3.3rem] full:text-[6.1rem]  text-[#354F52]">
        I build experiences
      </div>

      <p className=" absolute mr-[1rem] top-[6rem] notebook:top-[9rem] desktop:top-[11rem] full:top-[16rem] text-[0.7rem] notebook:text-[0.75rem] desktop:text-[1rem] full:text-[1.8rem]  text-justify ">
        I’m a web developer focused on developing stylish and accesible digital
        experiences. Currently, I’m strengthening my front end skills, but I can
        perform as a full stack developer.
      </p>
    </article>
  );
};

export default IntroSection;
