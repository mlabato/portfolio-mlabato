import Title from "../ux/Title";

const SectionCard = (props) => {
    return(
        <article className="mx-[20rem] my-[5rem] relative top-[30rem]">
        <Title text={props.titleText} />
        
        {props.child}
        
    </article>
    )
}

export default SectionCard