const Title = (props) => {
    return(
        <div className="font-semibold text-[#354F52] text-[1.5rem] notebook:text-[1.8rem] desktop:text-[3rem] full:text-[3rem]  ">
            {props.text}
        </div>
    )
}

export default Title;