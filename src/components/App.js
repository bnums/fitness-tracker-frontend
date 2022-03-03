/* eslint-disable react-hooks/exhaustive-deps */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApi } from "../api";

// React components
import Home from "./Home";
import Navigation from "./Navigation";
import Routines from "./Routines/Routines";
import Activities from "./Activities/Activities";
import AccountForm from "./AccountForm";
import UserRoutines from "./Routines/UserRoutines";
// import Test from "./Test";
import AllRoutines from "./Routines/AllRoutines";
import RoutineSingle from "./Routines/RoutineSingle";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [routine, setRoutine] = useState({});
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
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setUser(localStorage.getItem("user"));
    }
  }, []);

  useEffect(() => {
    fetchRoutines();
    fetchActivities();
  }, []);

  return (
    <div className="App">
      <Navigation
        token={token}
        setToken={setToken}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="account/:method"
          element={<AccountForm setUser={setUser} setToken={setToken} />}
        />
        <Route path="/routines" element={<Routines />}>
          <Route
            path="public/all"
            element={
              <AllRoutines
                routines={routines}
                user={user}
                setRoutine={setRoutine}
              />
            }
          />
          <Route
            path=":routineId"
            element={<RoutineSingle routine={routine} />}
          />
          <Route
            path="user/:username"
            element={
              <UserRoutines user={user} token={token} setRoutine={setRoutine} />
            }
          />
        </Route>
        <Route
          path="/activities"
          element={
            <Activities
              activities={activities}
              token={token}
              fetchActivities={fetchActivities}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
