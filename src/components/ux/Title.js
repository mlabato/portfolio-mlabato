const Title = (props) => {
    return(
        <div className="font-semibold text-[#354F52] text-[1.5rem] notebook:text-[1.8rem] desktop:text-[2.2rem] full:text-[3rem] text-center ">
            {props.text}
        </div>
    )
}

export default Title;