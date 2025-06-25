import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import capstoneImage from '../assets/capstoneproject.png';
import Portfolio from '../assets/Porfolio.png';
import latestPorfolio from '../assets/latestPorfolio.png';
import Design1 from '../assets/Design1.jpg';
import Design2 from '../assets/Design2.jpg';
import Design3 from '../assets/Design3.jpg';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const PreviousProject = () => {
  const categories = ["WEB DEVELOPMENT", "PHOTO EDITING"];
  const [selectedCategory, setSelectedCategory] = React.useState("WEB DEVELOPMENT");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="previous-project" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-medium text-center mb-12">Previous Project</h2>
        
        {/* Categories Navigation */}
        <nav className="flex justify-center gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-gray-400 hover:text-white transition-colors relative pb-2
                ${selectedCategory === category ? 'text-white' : ''}
              `}
            >
              {category}
              {selectedCategory === category && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          {selectedCategory === "WEB DEVELOPMENT" ? (
            <motion.div
              key="web-development"
              className="grid grid-cols-1 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Project 1 - Portfolio */}
              <motion.div 
                className="group relative aspect-square overflow-hidden bg-gray-900"
                variants={itemVariants}
              >
                <img
                  src={Portfolio}
                  alt="Portfolio"
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-white text-2xl font-medium">First Portfolio</h3>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex flex-col items-center space-y-2">
                        <AiFillHtml5 className="text-4xl text-orange-500" />
                        <span className="text-orange-500 text-sm">HTML</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <DiCss3 className="text-4xl text-blue-500" />
                        <span className="text-blue-500 text-sm">CSS</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm text-center">(Not Responsive)</p>
                    <a 
                      href="https://landing-page-5zim.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 - Capstone */}
              <motion.div 
                className="group relative aspect-square overflow-hidden bg-gray-900"
                variants={itemVariants}
              >
                <img
                  src={capstoneImage}
                  alt="Capstone Project"
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-white text-2xl font-medium">Capstone Project</h3>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex flex-col items-center space-y-2">
                        <AiFillHtml5 className="text-4xl text-orange-500" />
                        <span className="text-orange-500 text-sm">HTML</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <SiTailwindcss className="text-4xl text-cyan-400" />
                        <span className="text-cyan-400 text-sm">Tailwind</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <DiNodejsSmall className="text-4xl text-green-500" />
                        <span className="text-green-500 text-sm">Node.js</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <SiExpress className="text-4xl text-gray-400" />
                        <span className="text-gray-400 text-sm">Express.js</span>
                      </div>
                    </div>
                    <a 
                      href="https://www.ecentersanluis.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
                className="group relative aspect-square overflow-hidden bg-gray-900"
                variants={itemVariants}
              >
                <img
                  src={latestPorfolio}
                  alt="Web Development Project 3"
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-white text-2xl font-medium">Latest Portfolio</h3>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                        <span className="text-cyan-400 text-sm">React</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite" className="w-10 h-10" />
                        <span className="text-yellow-400 text-sm">Vite</span>
                      </div>
                    </div>
                    <a 
                      href="https://latest-portfolio-five-eta.vercel.app/"
                      target="blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="photo-editing"
              className="grid grid-cols-1 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Photo Editing Projects */}
              <motion.div 
                className="group relative aspect-square overflow-hidden bg-gray-900"
                variants={itemVariants}
              >
                <img
                  src={Design1}
                  alt="Photo Editing 1"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium">Photo Editing 1</h3>
                </div>
                <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-95"></div>
              </motion.div>

              <motion.div 
                className="group relative aspect-square overflow-hidden bg-gray-900"
                variants={itemVariants}
              >
                <img
                  src={Design2}
                  alt="Photo Editing 2"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium">Photo Editing 2</h3>
                </div>
                <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-95"></div>
              </motion.div>

              <motion.div 
                className="group relative aspect-square overflow-hidden bg-gray-900"
                variants={itemVariants}
              >
                <img
                  src={Design3}
                  alt="Photo Editing 3"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium">Photo Editing 3</h3>
                </div>
                <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-95"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PreviousProject;