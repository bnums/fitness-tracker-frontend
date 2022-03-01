import React, { useEffect, useState } from "react";
import { callApi } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const fetchRoutines = async () => {
    const data = await callApi({ url: "/routines" });
    setRoutines(data);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <div>
      <h1>Routines Page</h1>
      {routines.map((routine) => {
        return (
          <div key={routine.id}>
            {routine.name} {routine.goal}
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
