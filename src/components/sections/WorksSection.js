import Title from "../ux/Title";
import WorkCard from "../ux/WorkCard";

const WorksSection = (props) => {


 


  return(
    <article id="works" className=" px-[2rem] notebook:px-[7.5rem] desktop:px-[10rem] py-[2.5rem] notebook:py-[3.5rem] desktop:py-[6rem] bg-white ">
        <Title text={"some things i have built"} />
        
  
              <WorkCard />
   
    </article>
  )
};

export default WorksSection;
