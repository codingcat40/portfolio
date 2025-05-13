import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";

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
    </div>
  </>);
}

export default App;
