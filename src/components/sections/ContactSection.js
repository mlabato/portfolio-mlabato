import Button from "../ux/Button";
import SectionCard from "../ux/SectionCard";

const ContactSection = () => {
  return (
    <SectionCard titleText={"Get it touch"}>
      <p className="text-[#354F52]  my-[1rem] text-justify">
        As I previosly said, while I keep strengthening my skills, I'm keen on getting my first job as a web developer, so wheter you have a question, you liked
        my job or just want to say hi, contact me and I'll get back to you!
      </p>
      <Button text={<a href='mailto: m_labato@hotmail.com'> Say Hi! </a>} classes={"w-1/4 mx-auto"}/>
    </SectionCard>
  );
};

export default ContactSection;
