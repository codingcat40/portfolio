import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (<>
  {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)}/>}
    <div className={`min-h-screen transition-opacity duration-700
      ${!showLoading ? "opacity-100" : "opacity-0"}
      text-gray-200 bg-black`}>
          <Navbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
    </div>
  </>);
}

export default App;
