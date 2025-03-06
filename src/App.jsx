import "./App.css";
import Header from "./Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Achievements from "./sections/Achievements";
import Footer from "./Footer"

function App() {
  return (
    <div className="font-poppins">
      <Header/>
      <main>
        <Home />
        <About />
        <Contact />
        <Achievements />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
