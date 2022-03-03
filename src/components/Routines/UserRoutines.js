import AddRoutine from "./AddRoutine";
import React, { useEffect, useState } from "react";
import { callApi } from "../../api";
import { useNavigate } from "react-router";

const UserRoutines = ({ user, token, setRoutine }) => {
  const [userRoutines, setUserRoutines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRoutines = async () => {
      try {
        const data = await callApi({ url: `/routines/${user}`, token });
        setUserRoutines(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserRoutines();
  }, [setUserRoutines, token, user]);

  return (
    <>
      <h2>{user}'s Routines</h2>
      <div>
        <AddRoutine token={token} />
      </div>
      <div className="routines-cards">
        {userRoutines.map((routine) => {
          return (
            <div key={routine.id} className="routine-card">
              <button
                id="routine-name"
                onClick={() => {
                  setRoutine(routine);
                  navigate(`/routines/${routine.id}`);
                }}
              >
                {routine.name}
              </button>
              <div id="routine-creator">Created By: {routine.creatorName} </div>
              <div id="routine-goal">Goal: {routine.goal}</div>
              <div id="routine-activities">
                Activities: {routine.activities.length}
              </div>
              {user === routine.creatorName ? (
                <button
                  className="edit-activity-card-button"
                  onClick={() => console.log("working")}
                >
                  Edit
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserRoutines;
