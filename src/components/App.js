import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
