import Title from "../ux/Title";

const SectionCard = (props) => {
  return (
    <article className="mx-[20rem] my-[5rem] relative top-[30rem] flex flex-col">
      <Title text={props.titleText} />

      {props.children}
    </article>
  );
};

export default SectionCard;
