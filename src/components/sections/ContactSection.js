

import Button from "../ux/Button";
import Title from "../ux/Title";



const ContactSection = (props) => {


  return (
    <article className=" mx-[1.75rem] notebook:mx-[15rem] desktop:mx-[20rem] my-[5rem] relative notebook:top-[42rem] desktop:top-[32rem] flex flex-col" >
      <Title text={"let's talk!"} />
      <p className="text-[#354F52] text-[0.8rem] desktop:text-[1rem] my-[1rem] text-justify">
        As I previosly said, while I keep strengthening my skills, I'm keen on
        getting my first job as a web developer, so wheter you have a question,
        you liked my job or just want to say hi, contact me and I'll get back to
        you!
      </p>
      <Button
        text={<a href="mailto: m_labato@hotmail.com"> Say Hi! </a>}
        classes={"w-1/4 mx-auto"}
      />
    </article>
  );
};

export default ContactSection;

