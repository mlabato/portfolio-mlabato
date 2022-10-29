const Button = (props) => {
  return (
    <button className={"p-2  border-2 border-[#52796F] text-[#52796F] font-semibold rounded-lg hover:bg-[#52796F] hover:text-[#CAD2C5] ease-in-out duration-500 " + props.classes}>
      {props.text}
    </button>
  );
};

export default Button;
