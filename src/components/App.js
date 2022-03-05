/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { callApi } from "../api";

// React components
import Home from "./Home";
import Navigation from "./Navigation";
import PublicRoutines from "./Routines/PublicRoutines";
import Activities from "./Activities/Activities";
import AccountForm from "./AccountForm";
import UserRoutines from "./Routines/UserRoutines";
import Footer from "./Footer";
// import Test from "./Test";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const fetchActivities = async () => {
    try {
      const response = await callApi({ url: "/activities" });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, status } = useQuery("getActivities", fetchActivities);
  let activities = data;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setUser(localStorage.getItem("user"));
    }
  }, []);

  if (status === "loading") {
    return <div>loading</div>;
  }

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
        <Route
          path="myroutines/:username"
          element={
            <UserRoutines user={user} token={token} activities={activities} />
          }
        />
        <Route
          path="/routines/all"
          element={
            <PublicRoutines activities={activities} user={user} token={token} />
          }
        />
        <Route
          path="/activities"
          element={<Activities activities={activities} token={token} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
