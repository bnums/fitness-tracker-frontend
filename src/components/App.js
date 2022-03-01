import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Routines from "./Routines";
import Activities from "./Activities";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
