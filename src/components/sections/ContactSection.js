import Button from "../ux/Button";
import Title from "../ux/Title";

const ContactSection = (props) => {
  return (
    <section id="contact" className=" px-[2rem] notebook:px-[7.5rem] desktop:px-[10rem] py-[2.5rem] notebook:py-[3.5rem] desktop:py-[6rem]">
      <Title text={"let's talk!"} />

      <article className="flex flex-row justify-between items-start my-[1rem]">
        <div className="text-[#354F52] text-[.7rem] notebook:text-[1rem] desktop:text-[1.2rem] notebook:w-[55%] ">
          As I previosly said, while I keep strengthening my skills, I'm keen on
          getting my first job as a web developer, so wheter you have a
          question, you liked my job or just want to say hi, contact me and I'll
          get back to you!
          <br />
          <Button
            text={<a href="mailto: m_labato@hotmail.com"> Say Hi! </a>}
            classes={"w-1/2 desktop:w-1/4 mx-auto mt-[1rem] desktop:mt-[2rem]"}
          />
        </div>
        <img src="/images/contact-img.svg" alt="" className="w-[8.5rem] notebook:w-[15rem] desktop:w-[20rem]" />
      </article>
    </section>
  );
};

export default ContactSection;
