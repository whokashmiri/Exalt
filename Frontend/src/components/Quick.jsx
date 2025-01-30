import { FaPhone, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";


const Quick = () => {
    return (
        <div className="fixed right-4 sm:bottom-6 sm:right-6 flex flex-col sm:flex-col items-end sm:items-center space-y-4 sm:space-y-6 z-40">
            {/* YouTube Icon */}
            <div
                className="p-2 sm:p-3 bg-white text-red-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 animate-pulse"
                onClick={() => window.open('https://youtube.com', '_blank')}
            >
                <FaYoutube className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Instagram Icon */}
            <div
                className="p-2 sm:p-3 bg-white text-pink-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 animate-pulse"
                onClick={() => window.open('https://instagram.com', '_blank')}
            >
                <BsInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* LinkedIn Icon */}
            <div
                className="p-2 sm:p-3 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 animate-pulse"
                onClick={() => window.open('https://www.linkedin.com/in/yourprofile', '_blank')}
            >
                <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 " />
            </div>


             {/* Phone Icon */}
             <div
                className="p-2 sm:p-3 bg-white text-blue-600 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 sm:mt-6 animate-pulse"
                onClick={() => window.open('tel:+1234567890', '_blank')}
            >
                <FaPhone className="w-6 h-6 sm:w-8 sm:h-8 " />
            </div>
        </div>
    );
};

export default Quick;
