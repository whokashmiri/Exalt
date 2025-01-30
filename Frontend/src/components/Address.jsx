
import { HiBuildingOffice } from "react-icons/hi2";
import { GiTreeBranch } from "react-icons/gi";


import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";




export const Address = () => {

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <>

<footer className=" py-10">
     
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
       
      
       

       
       <div className="flex flex-col space-y-4 ml-8 mt-16" data-aos="fade-up">
       <div className="flex items-center bg-red space-x-2 rounded-full">
          <div className="h-16 w-16 bg-accent flex items-center justify-center rounded-full">
          <HiBuildingOffice className="text-3xl " />
          </div>
      

        </div>
         <h1 className="text-xl font-bold ">HEAD OFFICE</h1>
         <p className="text-lg ">
           Office No. 136 & 137, First Floor, Right Wing,
           <br /> Arish Complex, Model Town-D, Sopore,
           <br /> Baramulla J&K 19320
         </p>
         
       </div>

       <div  className="flex flex-col items-start space-y-4 ml-8 bg-contain  mt-16">

       <div className=" h-full rounded-2xl">
          <iframe
            title="Map to My Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050.954477782946!2d74.43927901790236!3d34.30651944479686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10fb052de0635%3A0xafe9d668178d6d84!2sGoExalt%20System%20LLC!5e0!3m2!1sen!2sin!4v1737605539647!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-2xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    
         
       </div>

       
       <div className="flex flex-col  space-y-4 ml-8 mt-16" data-aos="fade-up">
        <div className="flex items-center bg-red space-x-2 rounded-full">
          <div className="h-16 w-16 bg-accent flex items-center justify-center rounded-full">
          <GiTreeBranch className="text-3xl " />
          </div>
      

        </div>
         
         <h1 className="text-xl font-bold  ">BRANCH OFFICE</h1>
         <p className="text-lg ">
           602 - Chester, Nyati Eternity, Pune 411060,
           <br /> Pune 411060
         </p>
         <p className="text-lg ">sales@exaltsystem.com</p>
         <p className="text-lg ">+91-1954358794 / +91-7006334491</p>
         
       </div>


      


     </div>

     
     <div className=" mt-10 py-4">
       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-6 space-y-2 md:space-y-0">
         <p className="">&copy; 2023 ExaltSystem LLP</p>
         <div className="flex space-x-4">
           <p className=" hover:text-gray-700 cursor-pointer">Privacy Policy</p>
           <p className=" hover:text-gray-700 cursor-pointer">Cookie Policy</p>
           <p className=" hover:text-gray-700 cursor-pointer">Terms & Conditions</p>
         </div>
       </div>
     </div>
   </footer>

    </>
  )
}
