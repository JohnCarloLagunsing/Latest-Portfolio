import { Download } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resumePDF from '../assets/John_Carlo_M._Lagunsing_Resume.pdf';
import DPpic from '../assets/DPpic.png';


const Home = () => {
  return (
   <div className="lg:min-h-[90vh] md:min-h-[80vh] h-full px-4 sm:px-6 md:px-12 py-5 w-full bg-black bg-opacity-50 flex justify-center items-center">

<section
  id="home"
  className="max-w-[1600px] text-white bg-opacity-50 flex flex-col-reverse sm:flex-col md:flex-col-reverse md:mt-2 lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 gap-x-0 sm:mx-0 lg:gap-x-35"
>

        {/* Text Section */}
        <div className="lg:w-1/2 md:w-full  flex flex-col justify-center space-y-4 ">
        <div className="w-full flex flex-col justify-center  space-y-2 ">
        <strong className="text-2xl text-center sm:text-center md:text-center lg:text-left mt-3 lg:mt-0  md:mt-5">
  Hi There, I am
</strong>
<h2 className="text-4xl w-full font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent md:text-left text-center overflow-hidden typewriter">
  John Carlo <br className="inline sm:hidden " /> M. <br className="inline sm:hidden" /> Lagunsing
</h2>

          <p className='font-mono text-lg font-semibold text-center lg:text-left md:text-center tracking-wide'>Web Developer &bull; Editor &bull; Business Analyst</p>
          <p className="max-w-lg text-white text-lg leading-7 !text-center lg:!text-left md:text-center">
            A full-stack developer and skilled editor, I am eager for success in the IT industry.
            I am excited to contribute my expertise to dynamic projects and look forward to
            advancing my career in this evolving field.
          </p>
          </div>

          <a 
  className="border-2 border-white hover:border-purple-400 hover:text-purple-400 transition-all duration-300 ease-in-out px-6 py-2 text-center flex justify-center items-center text-md gap-3 w-90 rounded-3xl lg:mx-0 md:mx-auto" 
  href={resumePDF} 
  download
>
  Download CV <Download />
</a>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-2">
            <a 
              href="https://www.facebook.com/c.lagunsing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 sm:p-2.5 md:p-3 rounded-full bg-black bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaFacebook size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="https://www.instagram.com/your-instagram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 sm:p-2.5 md:p-3 rounded-full bg-black bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaInstagram size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="https://github.com/JohnCarloLagunsing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 sm:p-2.5 md:p-3 rounded-full bg-black bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaGithub size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/john-carlo-lagunsing-2103302a3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 sm:p-2.5 md:p-3 rounded-full bg-black bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaLinkedin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="mailto:jc6690304@gmail.com?subject=Inquiries "
              className="group p-2 sm:p-2.5 md:p-3 rounded-full bg-black bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-red-500 hover:border-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaEnvelope size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col justify-center md:order-2 order-1 sm:pt-2 sm:w-full lg:mt-0 mt-[45px]">

        <img
  src={DPpic}
  alt="Profile"
  className="w-96 h-96 sm:w-80 sm:h-80 md:w-120 md:h-120 object-cover rounded-full sm:mt-5 md:mt-0 lg:mt-0 md:ml-0 border-4 border-white shadow-lg"
/>

        </div>
      </section>
    </div>
  );
};

export default Home;