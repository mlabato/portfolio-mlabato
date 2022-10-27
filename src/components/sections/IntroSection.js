import { Fragment } from "react";

const IntroSection = () => {
  return (
    <Fragment>
      <article className="mx-[20rem] relative top-[10rem]">
        <div className="text-[1.5rem] ml-[0.25rem]  ">Hi I'm</div>
        <div className="absolute top-[0.75rem] font-extrabold text-[70px] text-[#84A98C]">Martin Labato</div>
         <div className="absolute top-[5rem] font-extrabold text-[50px] text-[#354F52]">I build web experiences</div>
        <p className="mr-[13rem] ml-[0.25rem] absolute top-[9.5rem]">
          I’m a web developer focused on developing stylish and accesible
          digital experiences. Currently, I’m strengthening my front end skills,
          but I can perform as a full stack developer.
        </p>
      </article>
    </Fragment>
  );
};

export default IntroSection;
