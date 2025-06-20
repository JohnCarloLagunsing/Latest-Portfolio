import "./App.css";
import Header from "./Header";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import PreviousProject from "./sections/PreviousProject";

import Footer from "./Footer"


function App() {
  return (
    <div className="font-poppins">
      <Header/>
      <main>
        <Home />
        <Skills />
        <PreviousProject /> 
        <Achievements />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
