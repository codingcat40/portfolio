import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  return <div>{showLoading && <LoadingScreen onComplete={() => setShowLoading(false)}/>}</div>;
}

export default App;
