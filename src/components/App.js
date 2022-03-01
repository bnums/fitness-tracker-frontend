import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApi } from "../api";
import Home from "./Home";
import Navigation from "./Navigation";
import Routines from "./Routines";
import Activities from "./Activities";
import AccountForm from "./AccountForm";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  const fetchRoutines = async () => {
    try {
      const data = await callApi({ url: "/routines" });
      setRoutines(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchActivities = async () => {
    try {
      const data = await callApi({ url: "/activities" });
      setActivities(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoutines();
    fetchActivities();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="account/:method"
          element={<AccountForm setUser={setUser} setToken={setToken} />}
        />
        <Route path="/routines" element={<Routines routines={routines} />} />
        <Route
          path="/activities"
          element={<Activities activities={activities} />}
        />
      </Routes>
    </div>
  );
}

export default App;
