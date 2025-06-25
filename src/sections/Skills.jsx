const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-[radial-gradient(circle_at_center,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_5%,_rgba(189,189,189,1)_100%)] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h4 className="text-3xl font-bold border-4 border-black inline-block px-24 py-3 tracking-[.25em] bg-white shadow-lg transform hover:scale-105 transition-all duration-300">
              SKILLS
            </h4>
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver innovative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">EDITING</h3>
              <p className="text-gray-600 text-sm">
                From lighting tweaks to full transformations, bringing your vision to life.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">DEVELOPMENT</h3>
              <p className="text-gray-600 text-sm">
                Code is my playground, and your vision is my blueprint for success.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">ANALYSIS</h3>
              <p className="text-gray-600 text-sm">
                Blending logic with curiosity to unlock hidden opportunities in data.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="p-5">
          <h5 className="text-2xl font-semibold mb-12 text-center relative">
            <span className="text-black">TECHNOLOGIES & TOOLS</span>
          </h5>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-20">
            {/* Development Section */}
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express.js", className: "bg-white rounded-full p-2" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", name: "Flutter" },
                ].map((tech, index) => (
                  <div key={index} className="group relative flex flex-col items-center">
                    <div className="w-16 h-16 transform transition-all duration-300 group-hover:scale-110 flex flex-col justify-center">
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className={`w-full h-full object-contain ${tech.className || ''}`}
                      />
                    </div>
                    <p className="mt-2 text-center font-medium text-gray-700 group-hover:text-gray-800">{tech.name}</p>
                  </div>
                ))}

                {/* Empty grid item to center C# and C++ */}
                <div className="hidden md:block"></div>

                {/* C# and C++ */}
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", name: "C#" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++" }
                ].map((tech, index) => (
                  <div key={tech.name} className="group relative flex flex-col items-center">
                    <div className="w-16 h-16 transform transition-all duration-300 group-hover:scale-110 flex flex-col justify-center">
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-center font-medium text-gray-700 group-hover:text-gray-800">{tech.name}</p>
                  </div>
                ))}
                <div className="col-span-full flex justify-center mt-3">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                      alt="WordPress"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

            {/* Design & Analysis Section */}
            <div className="col-span-full mt-12">
              <h6 className="text-lg font-medium text-gray-600 mb-6 text-center">Design & Analysis</h6>
              <div className="flex flex-wrap justify-center gap-x-30 gap-y-12 px-4 max-w-3xl mx-auto">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", name: "Photoshop" },
                  { src: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg", name: "Power BI" },
                  { src: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", name: "Excel" },
                ].map((tool, index) => (
                  <div key={index} className="group relative flex flex-col items-center">
                    <div className="w-16 h-16 transform transition-all duration-300 group-hover:scale-110 ">
                      <img
                        src={tool.src}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-center font-medium text-gray-700 group-hover:text-gray-800">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;