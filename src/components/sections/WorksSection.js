import Title from "../ux/Title";
import WorkCard from "../ux/WorkCard";

const WorksSection = (props) => {

const workList = [
  {
    name: "Twitter App",
    description: "A web app for visualizing personalized Twitter data. View your top retweeted and liked tweeted and detailed user information.",
    tech:"Express + React + Twitter API",
    website: "https://twitter-app-react.vercel.app/",
    github: "https://github.com/mlabato/twitterapp-react",
    image: "bg-twitter-app"
  },
  {
    name: "Outlet de Mates",
    description: "An e-commerce, which includes product browser, cart and e-payment methods. It also offers an admin dashboard with auth to manage stock and products. ",
    tech: "Express + React + MySQL + MercadoPago",
    image: "bg-odm-app"
  },
  {
    name: "MR Studio",
    description: "Responsive landing page with contact form linked to Firebase database.",
    tech: "React + Tailwind + Firebase",
    image: "bg-landing-mr",
    github: "https://github.com/mlabato/mr-studio",
    website: "https://mr-studio.vercel.app/"
  }
]
 


  return(
    <article className="mx-[1.75rem] notebook:mx-[15rem] desktop:mx-[20rem] my-[5rem] relative top-[37rem] notebook:top-[40rem] desktop:top-[30rem] ">
        <Title text={"some things i have built"} />
        
        {
          workList.map((work, i) =>{
            return(
              <WorkCard name= {work.name} description={work.description} tech={work.tech} website={work.website} github={work.website} image={work.image} key={i}/>
            )
          })
        }
        
    </article>
  )
};

export default WorksSection;
