import BSULogo from '../assets/bsulogo.png';
import HSLogo from '../assets/HSLogo.png';
import VirtualBearsLogo from '../assets/VBlogo.png';

const Achievements = () => {
    return (
      <section id="achievements" className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* High School Achievements Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src={HSLogo}
                    alt="High School Logo" 
                    className="w-30 h-30 object-contain"
                  />
                </div>
                <p className="text-gray-600 font-medium mb-2">St. Mary's Educational Institute</p>
                <h3 className="text-2xl font-semibold text-green-800">High School Achievements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700 text-center">With Honors</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700 text-center">Best in Conduct</span>
                </li>
              </ul>
            </div>

            {/* College Achievements Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src={BSULogo} 
                    alt="College Logo" 
                    className="w-30 h-30 object-contain"
                  />
                </div>
                <p className="text-gray-600 font-medium mb-2">Batangas State University</p>
                <h3 className="text-2xl font-semibold text-red-700">College Achievements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-center">
                  <span className="text-gray-700 text-center text-base sm:text-lg">
                    <span className="text-red-700 mr-2 align-middle">•</span>
                    Deans Lister During 1st Year College First Sem
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-12 mb-12 text-gray-800">Work Experience</h2>
            <div className="grid grid-cols-1 justify-items-center">
              {/* Work Experience Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center max-w-md w-full">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={VirtualBearsLogo} 
                      alt="Virtual Bears Logo" 
                      className="object-contain"style={{height:'100%'}}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold" style={{ color: '#f9ae54' }}>Tech stack used</h3>
                </div>
                <div className="flex justify-center gap-4 mb-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress Logo" className="w-14 h-14 object-contain" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3 Logo" className="w-14 h-14 object-contain" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" className="w-14 h-14 object-contain" />
                </div>
                <ul className="space-y-3">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Achievements;