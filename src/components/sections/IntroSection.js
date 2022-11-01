const IntroSection = () => {
  return (
    <article className=" mx-[1.75rem]  desktop:ml-[20rem] desktop:mr-[15rem] relative top-[8rem] desktop:top-[12rem] mb-[5rem] animate-opacityChangeY">

      <div className=" desktop:text-[1.5rem] ml-[0.15rem]  ">Hi I'm</div>

      <div className="absolute  top-[0.4rem]  desktop:top-[0.75rem] font-extrabold desktop:text-[5rem] text-[2.93rem]  text-[#84A98C]">
        Martin Labato
      </div>

      <div className="absolute  top-[3rem]  desktop:top-[5.5rem] font-extrabold desktop:text-[4rem] text-[2.18rem] text-[#354F52]">
        I build experiences
      </div>

      <p className="   desktop:mr-[9rem] desktop:ml-[0.25rem] absolute top-[6rem] desktop:top-[11rem] text-[0.7rem]  text-justify desktop:text-left desktop:text-[1rem]">
        I’m a web developer focused on developing stylish and accesible digital
        experiences. Currently, I’m strengthening my front end skills, but I can
        perform as a full stack developer.
      </p>
    </article>
  );
};

export default IntroSection;
