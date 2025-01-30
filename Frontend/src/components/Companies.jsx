
import { DiJqueryLogo,DiGithub , DiSass , DiEnvato , DiWordpress , DiTechcrunch } from "react-icons/di";

import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";


const cardsData = [
  {
    id: 1,
    icon: <DiJqueryLogo  size={100}  className="text-accent"  />,
  },
  {
    id: 2,
    icon: <DiGithub   size={100}  className="text-accent"  />,
    
  },
  {
    id: 3,
    icon: <DiSass   size={100}  className="text-accent"  />,
    
  },
 
  {
    id: 4,
    icon: <DiEnvato   size={100}  className="text-accent"  />,
    
  },
 
  {
    id: 5,
    icon: <DiWordpress   size={100} className="text-accent" />,
   
  },

  {
    id: 6,
    icon: <DiTechcrunch   size={100} className="text-accent" />,

  },
 
 
];

// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, description }) => {

   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <>
    <div className="">
    <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition duration-300" data-aos="fade-up">
      <div className="mb-4">{icon}</div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    </div>
    </>
  );
};

const Companies = () => {
  return (
    <div className="h-auto bg-primary flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
