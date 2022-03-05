/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { callApi } from "../api";
import useAuth from "../hooks/useAuth";

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
  const { setAuth } = useAuth();

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
      setAuth({
        user: localStorage.getItem("user"),
        token: localStorage.getItem("token"),
      });
    }
  }, []);

  if (status === "loading") {
    return <div>loading</div>;
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account/:method" element={<AccountForm />} />
        <Route
          path="myroutines/:username"
          element={<UserRoutines activities={activities} />}
        />
        <Route
          path="/routines/all"
          element={<PublicRoutines activities={activities} />}
        />
        <Route
          path="/activities"
          element={<Activities activities={activities} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
