import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const WorkWithUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
  return (
    <div className="flex flex-col md:flex-row lg:h-screen w-full">
      <div className="flex-1 overflow-hidden  flex justify-center items-center mb-0 md:mb-0"> 
        <img 
          src="https://images.pexels.com/photos/8068144/pexels-photo-8068144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Work With Us" 
          className="w-3/4 h-auto max-w-xs sm:max-w-sm md:max-w-2xl mx-auto rounded-3xl -rotate-12"
        />
      </div>
      <div 
        className="font-bold flex-1  flex flex-col lg:justify-center lg:items-center sm:items-start text-center pt-8 md:p-8 h-fit lg:h-full"
        data-aos="fade-down-left"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl">Work</h1>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl">With Us</h1>
        <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg"> 
          Want to Work With Us? <span className="bg-yellow-300 font-sans"> sales@exaltsystem.com</span> 
        </p>
      </div>
    </div>
  );
};

export default WorkWithUs;
