

import Button from "../ux/Button";
import Title from "../ux/Title";



const ContactSection = (props) => {


  return (
    <article className="mx-[20rem] my-[5rem] relative top-[30rem] flex flex-col" >
      <Title text={"get in touch"} />
      <p className="text-[#354F52]  my-[1rem] text-justify">
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

